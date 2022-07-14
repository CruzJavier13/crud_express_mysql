var express = require('express');
const {index, craeteNewProduct, saveData, deleteProduct , editProduct, updateProducts} = require('../controllers/prodcutControllers');
var router = express.Router();
const multer = require('multer');
//storage image to folder
let date = Date.now();
let routesStorage = multer.diskStorage({
    destination:function(request,file,callbak){
        callbak(null,'./public/images/');
    },
    filename:function(request,file,callbak){
        console.log(file);
        callbak(null,date+"-"+file.originalname);
    }
});
var loads = multer({
    storage:routesStorage
})
/* GET home page. */
router.get('/',index);
router.get('/create', craeteNewProduct);
router.post('/',loads.single("image_product"),saveData);

router.post('/delete/:id',deleteProduct);
router.get('/edit/:id',editProduct);

router.post('/update',loads.single("image_product"),updateProducts);

module.exports = router;