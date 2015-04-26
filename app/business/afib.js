module.exports = {
	isAfib: function(data) {
		var afibv = 0.0;
		for(var i = 0; i < data.length -1; i++) {
			var json1 = JSON.parse(data[i+1]);
			var json = JSON.parse(data[i]);
			var temp = (json1.HeartRate-json.HeartRate)/json1.HeartRate;
			afibv += Math.pow(temp, 2);
		}
		//console.log(afibv);
		var result = afibv/(data.length -1);
		//console.log(result);
		return (result > 0.01);
	}
};