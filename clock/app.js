const moment = require("moment");

let response;

exports.lambdaHandler = async (event, context) => {
	const time = moment().format();

	try {
		response = {
			statusCode: 200,
			body: JSON.stringify({
				message: `Time is: ${time}`,
			}),
		};
	} catch (err) {
		console.log(err);
		return err;
	}

	return response;
};
