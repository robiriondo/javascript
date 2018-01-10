/*Makes sure that RE-Captcha is answered prior to submitting forms*/

window.onload = function() {
  var recaptcha = document.forms["mail"]["g-recaptcha-response"];
  recaptcha.required = true;
  recaptcha.oninvalid = function(e) {
    // do something
    alert("Please complete the captcha, otherwise the form won't be submitted.");
  }
}
