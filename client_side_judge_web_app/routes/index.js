var express = require('express');
var router = express.Router();
const { networkInterfaces } = require('os');

const nets = networkInterfaces();
const results = Object.create(null); // Or just '{}', an empty object

for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
        // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
        if (net.family === 'IPv4' && !net.internal) {
            if (!results[name]) {
                results[name] = [];
            }
            results[name].push(net.address);
        }
    }
}

var ip = null;
for (key in results){
  ip = results[key]
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { local_ip: ip });
});

router.get('/judge/:id', function(req, res, next) {
  res.render('judge', { judge_id: req.params['id']});
});

router.get('/settings', function(req, res, next) {
  res.render('settings');
});

module.exports = router;
