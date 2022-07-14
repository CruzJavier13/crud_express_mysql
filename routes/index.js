var express = require('express');
const {index} = require('../controllers/prodcutControllers');
var router = express.Router();

/* GET home page. */
router.get('/',function(req,res,next){
  res.send("Welcome to Manage Supermarket");
});

module.exports = router;
