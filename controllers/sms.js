// const apiKeys = require("../apikeys.js");

// Twilio Credentials
const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

exports.sendText = function (to, from, body, mediaUrl, callback) {
	client.messages
	  .create({
	    to: to,
	    from: from,
	    body: body,
	    mediaUrl: mediaUrl,
	  })
	  .then((err) => callback(err));
}