var express = require("express");
var router = express.Router();

router.get('/', (request, response) => {
    var data = {name:'Krish'};
    response.send(JSON.stringify(data));
});

module.exports = router;