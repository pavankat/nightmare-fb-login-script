var cheerio = require('cheerio')
var request = require('request');

request('http://www.baseballamerica.com/majors/2017-mlb-schedule/#at8JMUiCFz6L4CCx.97', function (error, response, body) {
 if (!error && response.statusCode == 200) {
   var $ = cheerio.load(body)
    
   var trs = $('.table.subheader-row tr');

   console.log(trs.html());

   for (var i=0; i<trs.length; i++){
       console.log(trs[i]);
   }
           
   $.html()
 }
})