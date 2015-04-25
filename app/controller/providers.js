var fs = require("fs");

module.exports = {
	patients: function(req, res) {
		fs.readFile("./db/provider-"+req.params.id+"-patients.json", 'utf8', function (err, data) {
  			if (err) { res.status(500).json(err); return; }
  			res.json(JSON.parse(data));
		});
	}
};