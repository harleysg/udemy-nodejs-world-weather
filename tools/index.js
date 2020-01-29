/**
 * Debbuguer de promesas
 * @param {object} request objeto de respuesta HttpRequest
 * @param {string} location identificación del metodo al que se desea debuguear
 * @param {string} filter [optional] - parametro para filtrar el request
 */
const debuguear = (request, location, filter) =>
	new Promise((resolve, reject) => {
		try {
			if (filter) {
				console.log("TCL: debuguear -> " + location, request[filter]);
			} else {
				console.log("TCL: debuguear -> " + location, request);
			}
			resolve(request);
		} catch (e) {
			reject(false);
		}
	});
/**
 * Manejador de errores en promesas
 * @param {string} msg
 */
async function throwsErrorHandle(msg) {
	throw new Error(msg);
}

module.exports = {
	debuguear,
	throwsErrorHandle
};
