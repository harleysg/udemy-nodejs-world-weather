const http = require("./http");
const { weather } = require("../API");
const { throwsErrorHandle } = require("../tools");

module.exports = async city => {
	if (city) {
		const url_weather = weather.filterUrlBy("geo", city);
		const queryWeather = await http.query(url_weather);
		return queryWeather;
	} else {
		await throwsErrorHandle(
			"weatherService: El parametro city no es valido"
		);
	}
};
