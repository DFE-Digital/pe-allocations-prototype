const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Branching
router.post('/pe-allocation/step-1', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names
    
    let firstTime = req.session.data['first-time']
    
    if (firstTime === 'Yes') {
        res.redirect('/pe-allocation/request-sent')
    } else {
        res.redirect('/pe-allocation/no-request-confirmed')
    }
})

router.post('/pe-allocation/offer-pe-2', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names
    
    let firstTime = req.session.data['first-time']
    
    if (firstTime === 'Yes') {
        res.redirect('/pe-allocation/request-sent-2')
    } else {
        res.redirect('/pe-allocation/no-request-confirmed-2')
    }
})

router.post('/pe-allocation/offer-pe-3', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names
    
    let firstTime = req.session.data['first-time']
    
    if (firstTime === 'Yes') {
        res.redirect('/pe-allocation/request-sent-3')
    } else {
        res.redirect('/pe-allocation/no-request-confirmed-3')
    }
})

router.post('/pe-allocation/new-provider', function (req, res) {
    // Get the answer from session data
    // The name between the quotes is the same as the 'name' attribute on the input elements
    // However in JavaScript we can't use hyphens in variable names
    
    let firstTime = req.session.data['first-time']
    
    if (firstTime === 'Yes') {
        res.redirect('/pe-allocation/thanks')
    } else {
        res.redirect('/pe-allocation/request-places')
    }
})

module.exports = router