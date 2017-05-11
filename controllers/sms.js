const apiKeys = require("../apikeys.js");

// Twilio Credentials
const accountSid = apiKeys.accountSid;
const authToken = apiKeys.authToken;
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