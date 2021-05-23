const express = require('express');
const router = express.Router();
const multer = require('multer');

const path = require('path');
const StoreData = require('./../models/Store');





const storage = multer.diskStorage({
    destination : function(req,file,cb){
      cb(null,'./images/');
    },
    filename: function(req, file, cb) {
      cb(null, new Date().toISOString() + file.originalname);
    }
  })
  

  const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };



  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
  });

  router.route('/storeregister').post(
    upload.single('photo'),
    
    function (req, res) {
     const  
      
      const description = req.body.description;
      const photo = req.file.path;
      const name = req.body.name;

      const newUserData = {
        name,
        description,
        photo
    }

      const newUser = new StoreData(newUserData);
       newUser.save()
       .then(storecreate => 
        {
         res.json(storecreate)
         
        })
        .catch(err => 
        {
          console.log(err)
        res.status(500).json({error: err});
         }); 
        
        
    }
  )


  router.route('/getstore').get(function (req, res) {
    
    StoreData.find(function (err, data){
     if(err){
       console.log(err);
     }
     else {
        console.log(data)
       res.status(200).send(data)
     
       
     }
   });
  
   
 })



 router.route('/getstorebyid/:id').get(function (req, res) {
   
  StoreData.findById(req.params.id)
    .then((storeid) => {
      
      res.json(storeid)
    }
    )
    .catch(err => console.log(err));
});
  



  
module.exports = router;