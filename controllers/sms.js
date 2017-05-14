var accountSid;
var authToken;

if (process.env.NODE_ENV === 'production') {
	console.log(process.env.NODE_ENV)
	// Twilio Credentials from deployment
	accountSid = process.env.accountSid;
	authToken = process.env.authToken;
} else {
	const apiKeys = require("../apikeys.js");
	// Twilio Credentials from local env
	accountSid = apiKeys.accountSid;
	authToken = apiKeys.authToken;
}

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

exports.retrieveConvo = function (to, from) {
	var currentConvo = {
	    to: to,
	    from: from
	};

	client.messages.list(currentConvo, function(err, data) {
	    console.log(data);
	});
}