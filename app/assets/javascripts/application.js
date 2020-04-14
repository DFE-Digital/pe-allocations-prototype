/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

// ;(function (global) {
//   'use strict'

//   var GOVUK = global.GOVUK || {}
//   GOVUK.Modules = GOVUK.Modules || {}

//   GOVUK.Modules.Edge = function () {
//     this.start = function (element) {
//       element.on('click', 'a[href="#"], .js-edge', alertUser);

//       function alertUser(evt) {
//         evt.preventDefault();
//         var target = $(evt.target);
//         var message = target.data('message') || 'Sorry, this hasn’t been built yet'

//         alert(message);
//       }
//     }
//   }

//   global.GOVUK = GOVUK
// })(window)

$('a[href*=\\#]').on('click', function (event) {
  if(this.pathname === window.location.pathname){
    
    var message ='Sorry, this hasn’t been built yet';
    alert(message);

  }
});