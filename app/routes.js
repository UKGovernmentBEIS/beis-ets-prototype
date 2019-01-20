const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.get('/*-submit', function(req, res, next){
  res.locals['serviceName'] = 'Submit emissions data for ETS'
  next()
})
router.get('/*-transfer', function(req, res, next){
  res.locals['serviceName'] = 'Check and trade emissions for ETS'
  next()
})

router.post("/choose-transfer-route", function(req,res){

  var whichTransfer = req.session.data['whichtransfer']

  if (whichTransfer == "Existing installation"){
    res.redirect("/existing-transfer")
  } else {
    res.redirect("/new-transfer")
  }

})

router.post("/choose-installation-route", function(req,res){

  var installationName = req.session.data['installationName']

  if (installationName == "Scunthorpe Integrated Iron & Steel Works"){
    res.redirect("/choose-unit-transfer")
  } else {
    res.redirect("/choose-transfer")
  }

})

router.post("/amount-surrender-route", function(req,res){

  var amountToSurrender = req.session.data['surrender-radio']

  if (amountToSurrender == "Everything"){
    res.redirect("/confirmation-surrender")
  } else if (amountToSurrender == "Other") {
    res.redirect("/are-you-sure-surrender")
  }

})

module.exports = router
