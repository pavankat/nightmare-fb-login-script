var Nightmare = require('nightmare');

var facebook = new Nightmare({ show: true })
  .goto('http://facebook.com')
  .wait(3000)
  .screenshot('fb.png')
  .type('.inputtext', 'emailGoesHere@gmail.com')
  .type('#pass', 'passwordGoesHere')
  .click('#login_form [type=submit]')
  .wait(5000)
  .evaluate(function () {
      return document.body.innerHTML;
  }).then(function(html) {
    console.log(html)
  });
