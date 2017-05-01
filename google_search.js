// using google 
var google = new Nightmare({ show: true })
  .goto('http://www.hostelbookers.com/search/city/14/arr/2016-07-14/ngt/3/ppl/1/')
  .wait(3000)
  .screenshot('hostel.png')
  .evaluate(function () {
      return document.body.innerHTML;
  }).then(function(html) {
    console.log(html);
  })