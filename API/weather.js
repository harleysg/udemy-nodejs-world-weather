const apiOpenweathermap = "https://api.openweathermap.org/data/2.5/";
const url_weather = `${apiOpenweathermap}weather`;
const url_forecast = `${apiOpenweathermap}forecast`;
const api_key = "4a8bd0bc43e8116ca67b5e4ce64d84a9";

const filterUrlBy = (filter, data) => {
	try {
		if (!filter && !data) {
			throw new Error("Parametros requeridos");
		}
		if (filter == "name" && data.hasOwnProperty("name")) {
			const { name } = data;
			return `${url_weather}?q=${name}&appid=${api_key}`;
		}
		if (filter == "id" && data.hasOwnProperty("id")) {
			const id = data;
			return `${url_weather}?id=${id}&appid=${api_key}`;
		}
		if (
			filter == "geo" &&
			data.hasOwnProperty("lat") &&
			data.hasOwnProperty("lon")
		) {
			const geo = data;
			return `${url_weather}?lat=${geo.lat}&lon=${geo.lon}&appid=${api_key}&units=metric`;
		}
	} catch (error) {
		console.error(error);
		return false;
	}
};

module.exports = {
	credentials: () => api_key,
	filterUrlBy
};
