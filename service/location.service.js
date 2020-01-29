const http = require("./http");
const { location } = require("../API");
const { throwsErrorHandle } = require("../tools");

function filterBy(cities) {
	if (cities.length > 0) {
		return {
			name: cities[0].name,
			lat: cities[0].lat,
			lon: cities[0].lon
		};
	} else {
		console.log("empty query");
		return false;
	}
}
async function filterCities(res) {
	try {
		const cities = filterBy(res);
		if (cities) {
			return cities;
		} else {
			console.log("empty query");
			return false;
		}
	} catch (error) {
		await throwsErrorHandle(
			"locationService -> filterCities: query location is empty"
		);
	}
}

/**
 * Use http query base on promise
 * @param {string} cityName
 */
module.exports = async cityName => {
	const credential = location.credentials();
	const response = await http.query({
		method: "get",
		baseURL: location.setUrlBy(cityName),
		headers: { [credential[0]]: credential[1] }
	});
	try {
		const { status, data } = response;
		if (status >= 200 && status < 300) {
			if (data["Results"].length > 0) {
				const filtered = await filterCities(data["Results"]);
				return filtered;
			} else {
				await throwsErrorHandle(
					"locationService: query location is empty"
				);
			}
		} else {
			await throwsErrorHandle(
				"locationService: Error respuesta del servidos, status",
				status
			);
		}
	} catch (e) {
		await throwsErrorHandle(e);
	}
};
