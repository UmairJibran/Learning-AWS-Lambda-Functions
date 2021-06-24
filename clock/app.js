const moment = require("moment");

exports.clock = async event => {
	console.log("Clock Route was hit, again!");
	console.log({ event });

	try {
		const time = moment().format();
		const response = {
			statusCode: 200,
			body: { message: JSON.stringify(`Current Time is: ${time}`) },
		};

		return response;
	} catch (err) {
		console.error("An Error occurred in clock function", err);
		const response = {
			statusCode: 500,
			body: JSON.stringify(`An Error occurred in clock function`),
		};
		return response;
	}
};
