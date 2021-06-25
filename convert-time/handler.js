const moment = require("moment-timezone");
exports.convertTime = async event => {
	console.log("Time Conversion Method");
	let tz = event.queryStringParameters && event.queryStringParameters.tz;
	let formattedDate = moment().format();
	if (tz !== null) formattedDate = moment().tz(tz).format();
	else tz = "GMT 0";
	const message = "The Time in " + tz + " is " + formattedDate;
	const response = { statusCode: 200, body: JSON.stringify(message) };
	return response;
};
