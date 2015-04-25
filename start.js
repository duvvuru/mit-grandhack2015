var fs=require("fs");
var afib = require("./app/business/afib.js");
var _ = require("lodash");

fs.readFile("./db/heartrate-1.json", 'utf8', function (err, data) {
	var json = JSON.parse(data);
	//console.log(json);
	//iterate all
	var start = 0; var count = 30;
	for(start =0; start < json.length; start++) {
		//if(start < json.length || (start+30) < json.length) {}
		var last = _.slice(json, start, start+count);
		//console.log(last);
		console.log(afib.isAfib(last));
	}
});
