var fs = require("fs");

module.exports = {
	get: function(req, res) {
		fs.readFile('./db/alert-'+req.params.id+'.txt', 'utf-8', function(err, data) {
			if (err) { res.status(500).json(err); return; }
  			res.json(JSON.parse(data));
		});
	},

	put: function(req, res) {
		console.log(res.body);
		fs.writeFile('./db/alert-'+req.params.id+'.txt', JSON.stringify({"sent": false}), function (err) {
			if(err) { res.status(500).json(err); return; }
			res.send({status: "success"});
		});
	}

};