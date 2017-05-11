const express = require('express');
const router = express.Router();
const sms = require('../controllers/sms');

router.post('/', function(req, res, next) {
	sms.sendText(req.body.to, req.body.from, req.body.body, req.body.mediaUrl, function (err) {
		res.sendStatus(err);
  	})
});

module.exports = router;
