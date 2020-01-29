const { http } = require("../service");
const API =
	"https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php";
const KEYs = [
	"x-rapidapi-key",
	"4210f9688amsha5f4d40b9ec1809p11702ejsnb66bd378456f"
];
/**
 * function
 * @param {string} name
 * @return {string} Url complete with endPoint
 */
const setUrlBy = name => `${API}?location=${encodeURI(name)}`;
const credentials = () => KEYs;
/**
 * Use http query base on promise
 * @param {string} cityName
 */
const getCoordinatesBy = async cityName => {
	const credential = credentials();
	const res = await http.query({
		method: "get",
		baseURL: setUrlBy(cityName),
		headers: { [credential[0]]: credential[1] }
	});
	return res;
};

module.exports = {
	credentials: () => KEYs,
	setUrlBy,
	getCoordinatesBy
};
