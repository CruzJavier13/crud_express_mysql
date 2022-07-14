
module.exports ={
    getDataProducts:function(connect,callbak){
        connect.query("SELECT * FROM products WHERE state_product = 1",callbak)
    },
    insertProduct:function(connect,data,files,callbak){
        connect.query("INSERT INTO products (state_product,name_product,brand_product,code_product,image_product,presentation_product,date_created) VALUES (?,?,?,?,?,?,?)",[data.state_product,data.name_product,data.brand_product,data.code_product,files.filename,data.presentation_product,data.date_created],callbak);
    },
    retornDataId:function(connect,id,callbak){
        connect.query("SELECT * FROM products WHERE id_product = ?",[id],callbak);
    },

    deleteProductId:function(connect,id,callbak){
        connect.query("UPDATE products SET state_product=0 WHERE id_product=?",[id],callbak);
    },
    updateProductId:function(connect,data,callbak){
        connect.query("UPDATE products SET state_product=?,name_product=?,brand_product=?,code_product=?,presentation_product=?,date_created=? WHERE id_product=?",[data.state_product,data.name_product,data.brand_product,data.code_product,data.presentation_product,data.date_created,data.id_product],callbak);
    },
   updateImage:function(connect,data,file,callbak){
        connect.query("UPDATE products SET image_product=? WHERE id_product=?",[file.filename,data.id_product],callbak);
   } 

}