const express = require('express')
const router = express.Router()

// make available for all routes
router.use(function (req, res, next) {
  if (!req.session.data.newAuthorisedReps) {
    req.session.data.newAuthorisedReps = []
  }
  if (!req.session.data.newTrustedAccounts) {
    req.session.data.newTrustedAccounts = []
  }
  next()
})



router.get('/', function (req, res, next) {
  req.session.data.pageView = req.query.view || 'operator'
  next()
})

router.get('/account/:id/:page?/:subPage?', function (req, res, next) {
  res.locals['currentDate'] = Date.now()
  res.locals['installationID'] = req.params.id
  var permitId = req.params.id;

  res.locals.installationData = req.session.data.installations.filter(function (installation, permitID) {
      if (installation.permitId == permitId) {
          return installation;
      }
  })[0];

  if (!req.params.page) { // if someone goes to /account/EU-100-73432-0-76/
      res.render('account/index')
  }
  else { // if someone goes to /account/EU-100-73432-0-76/foo or else { // if someone goes to /account/EU-100-73432-0-76/foo/bar
      next(); // do nothing and move along to the page specific route.
  }
})

router.get('/apply-for-an-account/:page', function (req, res, next) {
  next()
})

router.get('/register-for-ets/:page', function (req, res, next) {
  next()
})


router.get('/account/:id/:page/:subPage', function (req, res, next) {
  if (req.query.error) {
    res.locals.errorExists = req.query.error
  }
  res.render('account/' + req.params.page + '/' + req.params.subPage)
})


router.post('/account/:id/submit-emissions/specify-amount', function (req, res) {
    console.log(req.session.data.etsSubmitEmmissions);
    req.session.data.etsSubmitEmmissions.total = parseInt(req.session.data.etsSubmitEmmissions.emissions.co2) + parseInt(req.session.data.etsSubmitEmmissions.emissions.pfc) + parseInt(req.session.data.etsSubmitEmmissions.emissions.no2);
    res.redirect('/account/' + req.params.id + '/submit-emissions/select-verifier');
})

router.post('/account/:id/surrender-allowance/surrender-amount', function (req, res) {
  var amountToSurrender = req.session.data.etsSurrenderAllowance.amountToSurrender

  if (amountToSurrender === 'other') {
    res.redirect('confirm-oversurrender')
  } else {
    res.redirect('check-and-submit')
  }
})

router.post('/account/:id/transfer-allowance/select-installation', function (req, res) {
    res.redirect('select-recipient');
})

router.post('/account/:id/transfer-allowance/select-recipient', function (req, res) {
  var recipientType = req.session.data.etsTransferAllowance.recipientType

  if (recipientType === 'existing') {
    res.redirect('amount')
  } else {
    res.redirect('new-recipient')
  }
})

router.post('/register-for-ets/account-details-answer', function (req, res) {
  let previousEtsUser = req.session.data.etsRegister.isPreviousEtsUser

  if (previousEtsUser === 'yes') {
    res.redirect('/register-for-ets/your-linked-representative')
  } else {
    res.redirect('/apply-for-an-account/')
  }
})

router.post('/register-for-ets/operator-selection-answer', function (req, res) {
  let isGHG = req.session.data.etsRegister.ghgOperator

  if (isGHG === 'yes') {
    res.redirect('/register-for-ets/account-details')
  } else {
    res.redirect('/apply-for-an-account/')
  }
})

router.post('/register-for-ets/linked-representative-answer', function (req, res) {
  let linkedReps = req.session.data.etsRegister.linkedReps
  if (linkedReps.includes('non-existant')) {
    res.redirect('/register-for-ets/add-new-linked-representative')
  } else {
    res.redirect('/register-for-ets/check-and-submit')
  }
})


router.post('/account/:id/add-a-new-authorised-representative/representative-details', function (req, res, next) {
  var isExistingEtsUser = req.session.data.newLinkedRepresentative.existingEtsUser
  var existingUserId = req.session.data.newLinkedRepresentative.id

  if (isExistingEtsUser === 'yes' && existingUserId !== ' ') {
    res.redirect('/account/' + req.params.id + '/add-a-new-authorised-representative/check-respresentative-details')
  } else {
    res.redirect('/account/' + req.params.id + '/add-a-new-authorised-representative/confirmation')
  }
})

router.post('/account/:id/add-a-new-authorised-representative/confirmation', function (req, res, next) {
  var newAuthorisedRepName = req.session.data.newAuthorisedRepresentatives.name
  var newAuthorisedReps = req.session.data.newAuthorisedReps
  if (!newAuthorisedReps.includes(newAuthorisedRepName)) {
    req.session.data.newAuthorisedReps.push(newAuthorisedRepName)
  }
  next()
})

router.post('/account/:id/add-a-new-trusted-account/account-details', function (req, res, next) {
//   var newTrustedAccountId = req.session.data.newTrustedAccount.['id'] || ' '
//   var doesItemExist = req.session.data['existing-accounts'].find(o => o.id === newTrustedAccountId) || false

//   // if (newTrustedAccountId !== ' ' && doesItemExist) {
    res.redirect('/account/' + req.params.id + '/add-a-new-trusted-account/check-account-details')
//   // } else {
//   //   res.redirect('/account/' + req.params.id + '/add-a-new-trusted-account/account-details?error=true')
//   // }
  next()
})

router.post('/account/:id/add-a-new-trusted-account/confirmation', function (req, res, next) {
  var newTrustedAccountId = req.session.data.newTrustedAccount.id
  var newTrustedAccountDetails = {
    id: newTrustedAccountId,
    nickname: req.session.data.newTrustedAccount.accountNickname,
    note: req.session.data.newTrustedAccount.accountNotes
  }
  var newTrustedAccounts = req.session.data.newTrustedAccounts
  var doesItemExist = newTrustedAccounts.find(o => o.id === newTrustedAccountId) || false
  if (!doesItemExist) {
    req.session.data.newTrustedAccounts.push(newTrustedAccountDetails)
  }
  next()
})

module.exports = router
