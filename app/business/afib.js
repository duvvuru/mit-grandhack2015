module.exports = {
	isAfib: function(data) {
		var afibv = 0.0;
		for(var i = 0; i < data.length -1; i++) {
			var temp = (data[i+1].HeartRate-data[i].HeartRate)/data[i].HeartRate;
			afibv += Math.pow(temp, 2);
		}
		//console.log(afibv);
		var result = afibv/(data.length -1);
		//console.log(result);
		return (result > 0.1);
	}
};