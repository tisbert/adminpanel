var page = require('../models/page');
var express = require('express');
var router = express.Router();

router.get('/page', function(req, res) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Content-Type', 'application/json');
    page.get(res);
});

router.get('/page/:id', function(req, res) {
    page.show(req.params.id, res);
});

router.post('/page', function(req, res) {
    page.create(req.body, res);
});

router.put('/page', function(req, res) {
    page.update(req.body, res);
});

router.delete('/page/:id', function(req, res) {
    page.delete(req.params.id, res);
});

module.exports = router;
