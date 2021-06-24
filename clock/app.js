const moment = require("moment");

exports.lambdaHandler = async event => {
	console.log("Clock Route was hit!");
	console.log({ event });

	const time = moment();
	const response = {
		statusCode: 200,
		body: { message: JSON.stringify(`Current Time is: ${time}`) },
	};

	return response;
};
