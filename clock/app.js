const moment = require("moment");

exports.lambdaHandler = async event => {
	console.log("Clock Route was hit!");
	console.log({ event });

	try {
		const time = moment();
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
