var fs = require("fs");
var request = require('request');


function post(item) {

	var options = {
	  uri: 'http://localhost:8080/api/patients/1/heartrate',
	  method: 'POST',
	  json: item
	};

	request(options, function (error, response, body) {
		if(error) {console.error(error);}
		  if (!error && response.statusCode == 200) {
		    console.log(body); // Print the shortened url.
		  }
	});
}

fs.readFile('./db/heartrate-1-sample.json', 'utf-8', function(err, data) {
    if (err) throw err;
    var json = JSON.parse(data);

    var i = 0;
    var sendPost = function() {
    	console.log("Posting item: "+i);
    	post(json[i]);
   		i++;
   		if(i >= json.length) {
   			i = 0;
   		}
    };
   	setInterval(sendPost, 1000);
});