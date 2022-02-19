var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var data = {
      "productDataList": [
          {
              "name": "Laptop",
              "price": 222222222,
              'currency': '$',
              "manu": "Samsung",
              "imageUrl": "https://i.pcmag.com/imagery/roundups/02naaOkVLe7DIiejFUyDPJp-31..v1588859331.jpg"
          },
          {
              "name": "Telivision",
              "price": "$20000",
              "manu": "Sony",
              "imageUrl": "https://media.croma.com/image/upload/v1610603169/Croma%20Assets/Entertainment/Television/Images/32W6100-01_uktndu.png"
          },
          {
              "name": "Hardisk",
              "price": "$2500",
              "manu": "Hp",
              "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEQE7m4AI-XdDuBy6D1EK3Dw3uIU3j6Uhlg&usqp=CAU"
          },
          {
              "name": "Headset",
              "price": "$2300",
              "manu": "JBL",
              "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIV_JDuddHtkzO4EeY6LnGBfFElj4W2_lAYw&usqp=CAU"
          }
      ]
  }
    data = JSON.stringify(data);
    setTimeout(() => {
        res.send(data);
    }, 100);    
});

module.exports = router;