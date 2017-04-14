var upload = require('../models/upload');
var express = require('express');
var router = express.Router();

router.post('/api/upload', function(req, res) {
    upload.create(req.body, res);
});

module.exports = router;
