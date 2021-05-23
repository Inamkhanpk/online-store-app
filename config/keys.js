const mongoose = require("mongoose");






mongoose.connect(process.env.MONGODB_LINK,{useNewUrlParser:true,useUnifiedTopology: true});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'CONNECTION ERROR :'));
db.once('open', function () {
  
  console.log('MONGODB CONNETED!!')
  return db;
});