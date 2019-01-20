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

router.get('/apply-for-an-account/:page', function (req, res, next) {
  res.locals['serviceName'] = 'Apply for an ETS account'
  next()
})

router.get('/register-for-ets/:page', function (req, res, next) {
  res.locals['serviceName'] = 'Register for ETS'
  next()
})

router.get('/transfer-allowance/:page', function (req, res, next) {
  res.locals['serviceName'] = 'Check and trade emissions for ETS'
  next()
})

router.get('/submit-emissions/:page', function (req, res, next) {
  res.locals['serviceName'] = 'Submit emissions data for ETS'
  next()
})

router.get('/surrender-allowance/:page', function (req, res, next) {
  res.locals['serviceName'] = 'Surrender emissions allowance for ETS'
  next()
})

router.get('/account/:id', function (req, res, next) {
  res.locals['serviceName'] = 'Account'
  res.locals['currentDate'] = Date.now()
  res.locals['installationID'] = req.params.id
  res.locals['pageView'] = req.query.view
  res.render('account/index')
})

router.get('/add-a-new-authorised-representative/:page', function (req, res, next) {
  res.locals['serviceName'] = 'New authorised representative'
  next()
})

router.get('/add-a-new-trusted-account/:page', function (req, res, next) {
  res.locals['serviceName'] = 'New trusted account'
  next()
})

router.get('/add-a-new-trusted-account/account-details', function (req, res, next) {
  if (req.query.error) {
    res.locals['errorExists'] = req.query.error
  }
  next()
})

router.post('/transfer-allowance/select-recipient-answer', function (req, res) {
  var recipientType = req.session.data['ets-transfer-allowance']['select-recipient']

  if (recipientType === 'existing') {
    res.redirect('existing-recipient')
  } else {
    res.redirect('new-recipient')
  }
})

router.post('/register-for-ets/account-details-answer', function (req, res) {
  let previousEtsUser = req.session.data['ets-register']['is-previous-ets-user']

  if (previousEtsUser === 'yes') {
    res.redirect('/register-for-ets/your-linked-representative')
  } else {
    res.redirect('/apply-for-an-account/')
  }
})

router.post('/register-for-ets/operator-selection-answer', function (req, res) {
  let isGHG = req.session.data['ets-register']['ghg-operator']

  if (isGHG === 'yes') {
    res.redirect('/register-for-ets/account-details')
  } else {
    res.redirect('/apply-for-an-account/')
  }
})

router.post('/register-for-ets/linked-representative-answer', function (req, res) {
  let linkedReps = req.session.data['ets-register']['linked-reps']
  if (linkedReps.includes('non-existant')) {
    res.redirect('/register-for-ets/add-new-linked-representative')
  } else {
    res.redirect('/register-for-ets/check-and-submit')
  }
})

router.post('/surrender-allowance/surrender-amount-answer', function (req, res) {
  var amountToSurrender = req.session.data['ets-surrender-allowance']['amount-to-surrender']

  if (amountToSurrender === 'other') {
    res.redirect('confirm-oversurrender')
  } else {
    res.redirect('confirmation')
  }
})

router.post('/add-a-new-authorised-representative/rep-details-answer', function (req, res, next) {
  var isExistingEtsUser = req.session.data['new-linked-representative']['existing-ets-user']
  var existingUserId = req.session.data['new-linked-representative']['id']

  if (isExistingEtsUser === 'yes' && existingUserId !== ' ') {
    res.redirect('check-respresentative-details')
  } else {
    res.redirect('confirmation')
  }
})

router.post('/add-a-new-authorised-representative/confirmation', function (req, res, next) {
  var newAuthorisedRepName = req.session.data['new-authorised-representatives']['name']
  var newAuthorisedReps = req.session.data.newAuthorisedReps
  if (!newAuthorisedReps.includes(newAuthorisedRepName)) {
    req.session.data.newAuthorisedReps.push(newAuthorisedRepName)
  }
  next()
})

router.post('/add-a-new-trusted-account/account-details-answer', function (req, res, next) {
  var newTrustedAccountId = req.session.data['new-trusted-account']['id'] || ' '
  var doesItemExist = req.session.data['existing-accounts'].find(o => o.id === newTrustedAccountId) || false

  if (newTrustedAccountId !== ' ' && doesItemExist) {
    res.redirect('check-account-details')
  } else {
    res.redirect('/add-a-new-trusted-account/account-details?error=true')
  }
})

router.post('/add-a-new-trusted-account/confirmation', function (req, res, next) {
  var newTrustedAccount = req.session.data['new-trusted-account']['name']
  var newTrustedAccounts = req.session.data.newTrustedAccounts
  if (!newTrustedAccounts.includes(newTrustedAccount)) {
    req.session.data.newTrustedAccounts.push(newTrustedAccount)
  }
  next()
})

module.exports = router
