var express = require('express');
const {index} = require('../controllers/prodcutControllers');
var router = express.Router();

/* GET home page. */
router.get('/',function(req,res,next){
  res.render("index",{title:"Begin"});
});

module.exports = router;
