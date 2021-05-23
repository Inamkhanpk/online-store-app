const express = require('express');
const router = express.Router();
const multer = require('multer');

const path = require('path');
const ProductData = require('./../models/Product');





const storage = multer.diskStorage({
    destination : function(req,file,cb){
      cb(null,'./images/');
    },
    filename : function(req,file,cb){
      cb(null, file.originalname)
      
    }
  })
  



  const upload = multer({ storage });

  router.route('/productregister').post(
    upload.single('photo'),
    
    function (req, res) {
      
      const uploader = req.body.uploader
      const description = req.body.description;
      const photo = req.file.path;
      const product = req.body.product;
      const supply = req.body.supply;

      const productData = {
        product,
        description,
        photo,
        supply,
        uploader
    }

      const newProduct = new ProductData(productData);
       newProduct.save()
       .then(productcreate => 
        {
          console.log(productcreate)
         res.json(productcreate)
         
        })
        .catch(err => 
        {
          console.log(err)
        res.status(500).json({error: err});
         }); 
        
        
    }
  )


  router.route('/getproduct').get(function (req, res) {
    
    ProductData.find(function (err, data){
     if(err){
       console.log(err);
     }
     else {
       
       res.status(200).send(data)
     
       
     }
   });
  
   
 })


  
  
  
module.exports = router;