const argv = require("yargs").options({
	city: {
		alias: "n",
		desc: "Nombre de la ciudad a optener el clima",
		demand: true
	}
}).argv;

module.exports = argv;
