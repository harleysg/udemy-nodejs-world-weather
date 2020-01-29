const { argv } = require("./config");
const { weatherService, locationService } = require("./service");
const { weather } = require("./API");
const { debuguear } = require("./tools");

switch (argv._[0]) {
	case "city":
		console.log(argv.city);
		locationService(argv.city)
			.then(weatherService)
			.then(request => {
				if (request) {
					const { weather, main, name, sys } = request.data;
					const message = `El clima de ${name}, ${sys.country} es de ${main.temp}°C, ${weather[0].description}`;
					console.log(message);
				}
			})
			.catch(e => {
				console.error(e);
			});

		break;
	default:
		console.log(`Comando ${argv} no conocido`);
		break;
}
