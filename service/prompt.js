const prompts = require("prompts");

const DEFAULTQUESTIONs = [
	{
		type: "autocomplete",
		name: "Countries",
		message: "Filtrar por país:",
		choices: []
	},
	{
		type: "toggle",
		name: "confirm",
		message: "Can you confirm?",
		initial: true,
		active: "yes",
		inactive: "no"
	}
];
async function promptFilter(questions, data) {
	if (!questions) {
		questions = DEFAULTQUESTIONs;
	}
	if (data.length > 0) {
		questions[0].choices = data.reduce((ac, c) => {
			ac.push({ title: c.description, value: c.value });
			return ac;
		}, []);
		const baz = await prompts(questions);
		return baz;
	} else {
		return false;
	}
}
module.exports = {
	promptFilter
};
