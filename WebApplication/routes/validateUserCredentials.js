var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', (req, res, next) => {
    console.log(req.query); // if user seding data in GET
    console.log(req.body); // if user seding data in POST
    var data = {};
    if (req.body.userId == 'admin' && req.body.userPwd == 'sample') {
        data.status = 'Valid'
    } else {
        data.status = 'Invalid'
    }    
    res.send(JSON.stringify(data));
});


module.exports = router;
