var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { local_ip: ip });
});

router.get('/judge/:id', function(req, res, next) {
  res.render('judge', { judge_id: req.params['id']});
});

module.exports = router;
