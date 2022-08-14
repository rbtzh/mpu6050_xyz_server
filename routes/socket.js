var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('sock sock socket');
});

/* GET home page. */
router.get('/client', function (req, res, next) {
    res.render('client');
});

module.exports = router;
