var fs = require("fs");
var _ = require("lodash");

module.exports = {
	patients: function(req, res) {
		fs.readFile("./db/provider-"+req.params.id+"-patients.json", 'utf8', function (err, data) {
  			if (err) { res.status(500).json(err); return; }
  			res.json(JSON.parse(data));
		});
	},

	putPatient: function(req, res) {
		fs.readFile("./db/provider-"+req.params.id+"-patients.json", 'utf8', function (err, data) {
  			if (err) { res.status(500).json(err); return; }
  			var jsonData = JSON.parse(data);
  			var item = _.find(jsonData, "id", req.body.id);
  			if(!req.body) {
  				res.status(500).json({error: "post data missing"});
  				return;
  			}

  			if(item) {
  				item.alert = req.body.alert;
  				fs.writeFile("./db/provider-"+req.params.id+"-patients.json", JSON.stringify(jsonData, null, 4), function(err, response) {
  					if (err) { res.status(500).json(err); return; }
  					res.send({status: "success"});
  				});
  			}
  			else {
  				res.status(500).json({ error: 'item not found' });
  			}
		});	
	}
};