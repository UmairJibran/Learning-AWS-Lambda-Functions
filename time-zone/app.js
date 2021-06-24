const moment = require("moment-timezone");

exports.lambdaHandler = async event => {
	const timezone = event.stringQueryParameter && event.stringQueryParameter.tz;
	const time = moment()
		.tz(timezone == undefined ? "Europe/London" : timezone)
		.format("ha z");

	const response = {
		statusCode: 200,
		body: { message: JSON.stringify(`The time in ${timezone} is ${time}`) },
	};

	return response;
};
