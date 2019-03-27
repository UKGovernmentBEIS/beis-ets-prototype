const express = require('express')
const router = express.Router()
const utils = require('../lib/utils.js')

// make available for all routes
router.use(function (req, res, next) {
  if (!req.session.data.newAuthorisedReps) {
    req.session.data.newAuthorisedReps = []
  }
  if (!req.session.data.newTrustedAccounts) {
    req.session.data.newTrustedAccounts = []
  }
  if (!req.session.data.tasks) {
    req.session.data.tasks = []
  }
  req.session.data.todaysDate = new Date(Date.now()).toISOString()
  next()
})

function generateID (min, max) {
  return 'EU' + Math.floor(Math.random() * (max - min + 1) + min)
}

router.get('/', function (req, res, next) {
  req.session.data.pageView = req.query.view || 'operator'
  next()
})

router.post('/login-register', function (req, res, next) {
  if (!req.session.data.twofaSetupComplete) {
    res.redirect('/set-up-2fa/start');
  } else {
    res.redirect('2fa');
  }
})

router.post('/set-up-2fa/start', function (req, res, next) {
  res.redirect('download-google-authenticator')
})

router.post('/set-up-2fa/download-google-authenticator', function (req, res, next) {
  res.redirect('set-up-google-authenticator')
})

router.post('/set-up-2fa/set-up-google-authenticator', function (req, res, next) {
  res.redirect('backup-codes')
})

router.post('/set-up-2fa/set-up-google-authenticator', function (req, res, next) {
  res.redirect('backup-codes')
})

router.post('/set-up-2fa/backup-codes', function (req, res, next) {
  res.redirect('enter-backup-code')
})

router.post('/set-up-2fa/enter-backup-code', function (req, res, next) {
  req.session.data.twofaSetupComplete = "Yes";
  res.redirect('confirmation')
})

router.post('/2fa', function (req, res, next) {
    if (req.session.data.continue_url) {
        res.redirect(req.session.data.continue_url);
    } else {

      if ((req.session.data.registrationJourney == "organisationOnboarding") && (!req.session.data.onBoardingComplete)) {
        res.redirect('/register-your-organisation/task-list')
      }
      else if ((req.session.data.registrationJourney == "userOnboarding") && (!req.session.data.userRegistrationCompleted)) {
        res.redirect('/user-registration/start')
      }
      else {
        res.redirect('/app/dashboard')
      }
    }
})

router.get('/app/dashboard', function (req, res, next) {
  if (req.session.data.userPersona == "ea") {
    if ( req.query.q ) {
        res.render('app/accounts-search-results');
    } else {
        res.render('app/accounts-search');
    }
  } else {
    res.render('app/accounts-search-results');
  }
})

router.post('/app/dashboard', function (req, res, next) {
    res.redirect('dashboard?q=blah')
})

router.get('/app/transactions/search', function (req, res, next) {
    if ( req.query.q ) {
        res.render('app/transactions-search-results');
    } else {
        res.render('app/transactions-search');
    }
})

router.post('/app/transactions/search', function (req, res, next) {
    res.redirect('search?q=blah')
})

router.get('/app/users/search', function (req, res, next) {
    if ( req.query.q ) {
        res.render('app/users-search-results');
    } else {
        res.render('app/users-search');
    }
})

router.post('/app/users/search', function (req, res, next) {
    res.redirect('search?q=blah')
})

router.get('/account/:id/:page?/:subPage?', function (req, res, next) {
  res.locals['currentDate'] = new Date(Date.now()).toISOString()
  res.locals['installationID'] = req.params.id

  res.locals.installationData = req.session.data.installations.filter(function (installation) {
    if (installation.permitId === req.params.id) {
      return installation
    }
  })[0]

  if (!req.params.page) { // if someone goes to /account/EU-100-73432-0-76/
    res.render('account/index')
  } else { // if someone goes to /account/EU-100-73432-0-76/foo or else { // if someone goes to /account/EU-100-73432-0-76/foo/bar
    next() // do nothing and move along to the page specific route.
  }
})

router.get('/apply-for-an-account/:page', function (req, res, next) {
  next()
})

router.get('/register-for-ets/:page', function (req, res, next) {
  next()
})

router.get('/account/:id/surrender-allowance/surrender-amount', function (req, res, next) {
  req.session.data.etsSurrenderAllowance = req.session.data.etsSurrenderAllowance || {};
  req.session.data.etsSurrenderAllowance.totalAmountSurrendered = req.session.data.etsSurrenderAllowance.totalAmountSurrendered || 0;
  next()
});

router.post('/account/:id/submit-emissions/check-and-submit', function (req, res, next) {
    req.session.data.etsSurrenderAllowance = req.session.data.etsSurrenderAllowance || {}
    req.session.data.etsSurrenderAllowance.surrenderAmountDue = req.session.data.etsSubmitEmmissions.total;
    next()
})

router.get('/account/:id/submit-emissions/confirmation', function (req, res, next) {
    req.session.data.etsSubmitEmmissions.submissionComplete = "Yes";
    next();
})

router.post('/account/:id/submit-emissions/confirmation', function (req, res, next) {
  if (req.session.data.etsSubmitEmmissions.emissions) {
  // Only generate a transaction if there's an amount to submit
    var transactionID = generateID(796032, 796062)
    req.session.data.etsSubmitEmmissions.transactionID = transactionID
    var units = []
    for (var unit in req.session.data.etsSubmitEmmissions.emissions) {
      var unitObj = {
        type: unit,
        amount: parseInt(req.session.data.etsSubmitEmmissions.emissions[unit])
      }
      units.push(unitObj)
    }
    var newSubmitTransaction = {
      "transactionId": transactionID,
      "started": new Date(Date.now()).toISOString(),
      "lastUpdated": new Date(Date.now()).toISOString(),
      "type": "Submission",
      units: units,
      'proposerId': req.session.data.existingAuthorisedRepresentatives[6].id,
      'proposer': req.session.data.existingAuthorisedRepresentatives[6].name,
      verifier: req.session.data.etsSubmitEmmissions.verifier,
      "transferringAccount": req.params.id,
      "acquiringAccount": "Submission",
      "status": "Awaiting approval"
    }
    // push newly generated transaction onto transactions table
    req.session.data.transactions.push(newSubmitTransaction)
  }
  next()
})

router.get('/account/:id/:page/:subPage', function (req, res, next) {
  if (req.query.error) {
    res.locals.errorExists = req.query.error
  }
  res.locals.installation = req.session.data.installations.filter(function (installation) {
    if (installation.permitId === req.params.id) {
      return installation
    }
  })[0]
  res.render('account/' + req.params.page + '/' + req.params.subPage)
})

router.post('/account/:id/submit-emissions/specify-amount', function (req, res) {
    req.session.data.etsSubmitEmmissions.total = parseInt(req.session.data.etsSubmitEmmissions.emissions.co2 || 0) + parseInt(req.session.data.etsSubmitEmmissions.emissions.pfc || 0) + parseInt(req.session.data.etsSubmitEmmissions.emissions.no2 || 0);
    res.redirect('/account/' + req.params.id + '/submit-emissions/select-verifier');
})

router.get('/app/transaction/:id/:page?/:subPage?', function (req, res, next) {
  res.locals['transactionID'] = req.params.id

  res.locals.transaction = req.session.data.transactions.filter(function (transaction) {
    if (transaction.transactionId === req.params.id) {
      return transaction
    }
  })[0]
  if (!req.params.page) {
    res.render('app/transaction/index')
  } else {
    res.render('app/transaction/' + req.params.page)
  }
})

router.get('/app/user/:id/:page?/:subpage?', function (req, res, next) {
  res.locals['userID'] = req.params.id

  res.locals.user = req.session.data.existingAuthorisedRepresentatives.filter(function (user) {
    if (user.id === req.params.id) {
      return user
    }
  })[0]
  if (!req.params.page) {
    res.render('app/user/index')
  } else {
    res.render('app/user/' + req.params.page + '/' + req.params.subpage)
  }
})

router.post('/app/user/:id/suspend/check-and-submit/', function (req, res) {
  req.session.data.existingAuthorisedRepresentatives.find(function (rep, index) {
    if (rep.id === req.params.id) {
      req.session.data.existingAuthorisedRepresentatives[index].status = 'suspended'
      req.session.data.existingAuthorisedRepresentatives[index].notes = req.session.data.user.suspend.moreDetail
    }
  })
  res.redirect('confirmation')
})

router.post('/app/user/:id/reinstate/check-and-submit', function (req, res) {
  req.session.data.existingAuthorisedRepresentatives.find(function (rep, index) {
    if (rep.id === req.params.id) {
      req.session.data.existingAuthorisedRepresentatives[index].status = 'open'
    }
  })
  res.redirect('confirmation')
})

router.post('/app/user/:id/close/check-and-submit', function (req, res) {
  req.session.data.existingAuthorisedRepresentatives.find(function (rep, index) {
    if (rep.id === req.params.id) {
        req.session.data.existingAuthorisedRepresentatives[index].status = 'Closure requested - pending approval'
        var taskID = generateID(116032, 126062)
        var newTask = {
          'taskID': taskID,
          'accountID': rep.id,
          'accountName': rep.name,
          'started': new Date(Date.now()).toISOString(),
          'lastUpdated': new Date(Date.now()).toISOString(),
          'type': 'Account closure',
          'notes': req.session.data.user.close.moreDetail,
          'proposerId': req.session.data.existingAuthorisedRepresentatives[6].id,
          'proposer': req.session.data.existingAuthorisedRepresentatives[6].name,
          'taskStatus': 'Awaiting approval',
          'accountType': 'user'
        }
        // push newly generated transaction onto transactions table
        req.session.data.tasks.push(newTask)
    }}
  )
  res.redirect('confirmation')
})

router.post('/account/:id/surrender-allowance/surrender-amount', function (req, res) {
    if (req.session.data.etsSurrenderAllowance.draft.surrenderMethod === 'fullAmount') {
        req.session.data.etsSurrenderAllowance.draft.amountToSurrender = parseInt(req.session.data.etsSurrenderAllowance.surrenderAmountDue) - parseInt(req.session.data.etsSurrenderAllowance.totalAmountSurrendered)
        res.redirect('check-and-submit') }
    else {
        res.redirect('check-and-submit') }
})

router.post('/account/:id/surrender-allowance/check-and-submit', function (req, res) {
    // Only generate a transaction if there's an amount to surrender
    if (req.session.data.etsSurrenderAllowance.draft.amountToSurrender) {
        // Attempt to replace any commas if it's a string, otherwise just force it to be an integer
        var transactionID = generateID(596032, 596062)
        req.session.data.etsSurrenderAllowance.transactionID = transactionID
        var newSurrenderTransaction = {
          "transactionId": transactionID,
          "started": new Date(Date.now()).toISOString(),
          "lastUpdated": new Date(Date.now()).toISOString(),
          "type": "Surrender",
          units: [
            {
              type: 'allowances',
              amount: parseInt(req.session.data.etsSurrenderAllowance.draft.amountToSurrender.toString().replace(/,/g, ''))
            }
          ],
          'proposerId': req.session.data.existingAuthorisedRepresentatives[6].id,
          'proposer': req.session.data.existingAuthorisedRepresentatives[6].name,
          "transferringAccount": req.params.id,
          "acquiringAccount": "EU-110-56193-0-12",
          "status": "Awaiting approval"
        }
        // push newly generated transaction onto transactions table
        req.session.data.transactions.push(newSurrenderTransaction)
        // calculate the total amount surrendered so far being careful to strip out commas from the units submitted
        req.session.data.etsSurrenderAllowance.totalAmountSurrendered = parseInt(req.session.data.etsSurrenderAllowance.totalAmountSurrendered) + parseInt(req.session.data.etsSurrenderAllowance.draft.amountToSurrender.toString().replace(/,/g, ''));
        // clear the draft data store so it's empty for next time.
        req.session.data.etsSurrenderAllowance.draft = {};
    }
    res.redirect('confirmation');
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
router.post('/account/:id/transfer-allowance/add-nickname-answer', function (req, res) {
  res.redirect('amount')
})
router.post('/account/:id/transfer-allowance/amount', function (req, res) {
  res.redirect('notes')
})

router.post('/account/:id/transfer-allowance/notes', function (req, res) {
  res.redirect('check-and-submit-transfer')
})

router.post('/account/:id/transfer-allowance/check-and-submit-transfer', function (req, res) {

  function getAccountID (str) {
    return str.split(',')[1]
  }
  var transactionID = generateID(580697, 580710)
  req.session.data.etsTransferAllowance.transactionID = transactionID

  var chosenUnit = req.session.data.etsTransferAllowance.unitType
  var request
  switch (chosenUnit) {
    case 'CER':
      request = req.session.data.etsTransferAllowance.holdings.CER.moved
      break
    case 'ERU':
      request = req.session.data.etsTransferAllowance.holdings.ERU.moved
      break
    default:
      request = req.session.data.etsTransferAllowance.holdings.generalAllowance.moved
      break
  }
  var recipient = req.session.data.etsTransferAllowance.recepientId || getAccountID(req.session.data.etsTransferAllowance.recipient)
  var notes = req.session.data.etsTransferAllowance.notes;

  var newTransferTransaction = {
    'transactionId': transactionID,
    'started': new Date(Date.now()).toISOString(),
    'lastUpdated': new Date(Date.now()).toISOString(),
    'type': 'Transfer',
    units: [
      {
        type: chosenUnit === 'generalAllowance' ? 'allowances' : chosenUnit,
        amount: parseInt(request.toString().replace(/,/g, ''))
      }
    ],
    'transferringAccount': req.params.id,
    'acquiringAccount': recipient,
    'notes': notes,
    'proposerId': req.session.data.existingAuthorisedRepresentatives[6].id,
    'proposer': req.session.data.existingAuthorisedRepresentatives[6].name,
    'status': 'Awaiting approval'
  }
  // push newly generated transaction onto transactions table
  req.session.data.transactions.push(newTransferTransaction)
  res.redirect('confirmation')
})

router.post('/account/:id/edit/update-details', function (req, res) {
  // create task for national administrator
  // set suspended state on the account
  res.redirect('confirmation')
})

router.post('/account/:id/block/check-and-submit', function (req, res) {
  req.session.data.installations.find(function (installation, index) {
    if (installation.permitId === req.params.id) {
      req.session.data.installations[index].status = 'blocked'
    }
  })
  res.redirect('confirmation')
})

router.post('/account/:id/reinstate/check-and-submit', function (req, res) {
  req.session.data.installations.find(function (installation,index) {
    if (installation.permitId === req.params.id) {
        req.session.data.installations[index].status = 'open';
    }}
  )
  res.redirect('confirmation')
})

router.post('/account/:id/close/check-and-submit', function (req, res) {
  req.session.data.installations.find(function (installation,index) {
    if (installation.permitId === req.params.id) {
        req.session.data.installations[index].status = 'Closure requested - pending approval'
        var taskID = generateID(116032, 126062)
        var newTask = {
          'taskID': taskID,
          'accountID': installation.permitId,
          'accountName': installation.name,
          'started': new Date(Date.now()).toISOString(),
          'lastUpdated': new Date(Date.now()).toISOString(),
          'type': 'Account closure',
          'notes': req.session.data.account.close.moreDetail,
          'proposerId': req.session.data.existingAuthorisedRepresentatives[6].id,
          'proposer': req.session.data.existingAuthorisedRepresentatives[6].name,
          'taskStatus': 'Awaiting approval',
          'accountType': 'account'
        }
        // push newly generated transaction onto transactions table
        req.session.data.tasks.push(newTask)
    }}
  )
  res.redirect('confirmation')
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

router.post('/account/:id/add-a-new-authorised-representative/enter-email-address', function (req, res, next) {
    res.redirect('/account/' + req.params.id + '/add-a-new-authorised-representative/check-and-submit')
})

router.post('/account/:id/add-a-new-authorised-representative/check-and-submit', function (req, res, next) {
    req.session.data.addAnAuthorisedRepresentativeCompleted = "Yes"
    res.redirect('/account/' + req.params.id + '/add-a-new-authorised-representative/confirmation')
})

router.post('/account/:id/add-a-new-authorised-representative/confirmation', function (req, res, next) {
  /*
   * OLD CODE
  var newAuthorisedRepName = req.session.data.newAuthorisedRepresentatives.name
  var newAuthorisedReps = req.session.data.newAuthorisedReps
  if (!newAuthorisedReps.includes(newAuthorisedRepName)) {
    req.session.data.newAuthorisedReps.push(newAuthorisedRepName)
    }
  */
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

router.post('/create-an-identity/enter-email-address', function (req, res) {
  res.redirect("choose-a-password");
})

router.post('/create-an-identity/choose-a-password', function (req, res) {
  res.redirect("confirmation");

})

router.post('/user-registration/start', function (req, res) {
  res.redirect("full-name");
})

router.post('/user-registration/full-name', function (req, res) {
  res.redirect("contact-number");
})

router.post('/user-registration/contact-number', function (req, res) {
  res.redirect("country-and-date-of-birth");
})

router.post('/user-registration/country-and-date-of-birth', function (req, res) {
  res.redirect("identification-details");
})

router.post('/user-registration/identification-details', function (req, res) {
  res.redirect("document-upload");
})

router.post('/user-registration/document-upload', function (req, res) {
  res.redirect("check-your-answers");
})

router.post('/user-registration/check-your-answers', function (req, res) {
  req.session.data.userRegistrationCompleted = "Yes";
  res.redirect("confirmation");
})

router.post('/register-an-organisation/start', function (req, res) {
  res.redirect("name-of-organisation");
})

router.post('/register-an-organisation/name-of-organisation', function (req, res) {
  res.redirect("vat-number");
})


router.post('/create-new-account/start', function (req, res) {
  res.redirect("choose-account-type");
})

router.post('/register-an-organisation/vat-number', function (req, res) {
  res.redirect("where-is-the-organisation-based");
})

router.post('/register-an-organisation/where-is-the-organisation-based', function (req, res) {
  // conditional logic depending on whether in uk or not
  res.redirect("uk-address");
})

router.post('/register-an-organisation/uk-address', function (req, res) {
  res.redirect("check-your-answers");
})

router.post('/register-an-organisation/check-your-answers', function (req, res) {
  req.session.data.registerAnOrganisationCompleted = "Yes";
  res.redirect("confirmation");
})
router.post('/create-new-account/choose-account-type', function (req, res) {
  res.redirect("about-the-account");
})

router.post('/create-new-account/about-the-account', function (req, res) {
  res.redirect("where-is-the-account-based");
})

router.post('/create-new-account/where-is-the-account-based', function (req, res) {
  console.log(req.session.data.createNewAccount);
  if (req.session.data.createNewAccount.basedInTheUK == "yes") {
    res.redirect("uk-address");
  } else {
    res.redirect("international-address");
  }
})

router.post('/create-new-account/uk-address', function (req, res) {
    res.redirect("add-representative");
})

router.post('/create-new-account/international-address', function (req, res) {
    res.redirect("add-representative");
})

router.post('/create-new-account/add-representative', function (req, res) {
    res.redirect("check-your-answers");
})

router.post('/create-new-account/check-your-answers', function (req, res) {
    req.session.data.createNewAccountCompleted = "Yes";
    res.redirect("confirmation");
})


// For the onBoarding journey
//
router.post('/account/add-a-new-authorised-representative/enter-email-address', function (req, res) {
    res.redirect("check-and-submit");
})

router.post('/account/add-a-new-authorised-representative/check-and-submit', function (req, res) {
    req.session.data.addAnAuthorisedRepresentativeCompleted = "Yes";
    res.redirect("confirmation");
})

router.post('/hide-banner', async function (req, res) {
  let maxAgeInDays = 28
  res.cookie(utils.COOKIE_NAME, 'yes', {
    maxAge: maxAgeInDays * 24 * 60 * 60 * 1000,
    httpOnly: true
  })
  // Redirect to where the user POSTed from.
  let previousURL = req.header('Referer') || '/'
  res.redirect(previousURL)
})

module.exports = router
