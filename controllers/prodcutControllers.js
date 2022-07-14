const connect = require('../config/supermarketDB');
const {getDataProducts, insertProduct, retornDataId, deleteProductId, updateProductId, updateImage} = require('../models/productsModels');
const deleteImage = require('fs');

module.exports ={
    
    index:function(req,res,next){
        getDataProducts(connect,function(err,data){
            if(!err){
                console.log(data);
                res.render('products/index', { title: 'Application CRUD', products: data});
            }
            else{
                console.log('Error to get data');
            }
        });

        // connect.query("SELECT * FROM products",function(err,data){
        //     if(!err) console.log(data);
        //     else console.log('Failed to get data');
        // });
    },
    craeteNewProduct:function(req,res,next){
        res.render('products/create',{title:'Create'});
    },
    saveData:function(req,res,next){
        insertProduct(connect,req.body,req.file,function(err){
            if(!err){
                console.log(req.body);
                res.redirect('/products');
            }
            else{
                console.log(err);
                res.send(req.body);
            }
        });
        //res.send(req.body);
        //res.render('',{title:'Aplication CRUD'});
    },
    deleteProduct:function(req,res){
        retornDataId(connect,req.params.id,function(err,reg){
            let dirimage = "public/images/"+(reg[0].image_product);

            if(deleteImage.existsSync(dirimage)){
                deleteImage.unlinkSync(dirimage);
            }
            else{
                console.log("The images not exist");
            }
        })
        deleteProductId(connect,req.params.id,function(err){
            if(!err){
                res.redirect("/products");
            }
        })
    },
    editProduct:function(req,res){
        retornDataId(connect,req.params.id,function(err,reg){
            if(!err){
                console.log(reg[0]);
                res.render("products/edit",{title:"Edit Product",products:reg[0]});
            }
        })
        
    },
    updateProducts:function(req,res){
        if(req.file){
            if(req.file.filename){
                retornDataId(connect,req.body.id_product,function(err,reg){
                    let dirimage = "public/images/"+(reg[0].image_product);
        
                    if(deleteImage.existsSync(dirimage)){
                        deleteImage.unlinkSync(dirimage);
                    }
                    else{

                    }
                    updateImage(connect,req.body,req.file,function(err){
                        if(err) console.log(err);
                    });
                })
                
            }
        }
        if(req.body.name_product){
            updateProductId(connect,req.body,function(err){
                if(err) console.log(err);
            });
        }
        res.redirect("/products");
    }
}