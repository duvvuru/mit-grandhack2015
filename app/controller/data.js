var fs=require("fs");
var afib = require("../business/afib.js");
var _ = require("lodash");
var request = require("request");

module.exports ={
	postHeartRate: function(req, res) {
		//new heart rate
		var patient_id = req.params.id;
		if(!req.body) {
			res.status(500).json({message: "post data missing; set content-type?"}); return; 
		}
		var data =req.body;
		
		//push to file and re-cal for event;
		fs.appendFile('./db/heartrate-'+patient_id+'.txt', JSON.stringify(data)+"\n", function (err) {
			if(err) { res.status(500).json(err); return; }
			res.send({status: "success"});
		});

		//if more than 401 lines delete the first
		// fs.readFile('./db/heartrate-'+patient_id+'.txt', JSON.stringify(data)+"\n", function (err) {
		// 	if(err) { res.status(500).json(err); return; }
		// 	res.send({status: "success"});
		// });

		//if afib
		//api/patients/1/notification
		//alert sent in last hr?
		//reset alert status
		

		fs.readFile('./db/heartrate-'+patient_id+'.txt', 'utf-8', function(err, data) {
		    if (err) throw err;

		    var lines = data.trim().split('\n');
		    lines = _.takeRight(lines, 30);
		    if(lines.length < 30) return;

		    if(afib.isAfib(lines)) {
		    	 console.log("afib");
		    	//did we send the alert or not
		    	fs.readFile('./db/alert-'+patient_id+'.txt', 'utf-8', function(err, data) {
		    		if (data) {
		    			var alertJson = JSON.parse(data);
		    			if(alertJson.sent === true) {
		    				//don't send again
		    				return;
		    			} 
		    		}
		    		console.log('sending alert');
	    			//POST to that api    		
					var options = {
					  uri: 'http://localhost:8080/api/patients/1/notification',
					  method: 'PUT',
					  json: {}
					};

					request(options, function (error, response, body) {
						if(error) {console.error(error);}
						  if (!error && response.statusCode == 200) {
						    console.log(body); // Print the shortened url.
						  }
					});

					fs.writeFile('./db/alert-'+patient_id+'.txt', JSON.stringify({"sent": true}), function (err) {
						if(err) { console.log(err); }
					});
		    		
		    	});
		    } 
		    else {
		    	console.log("not-afib");
		    }
		});

	}
};