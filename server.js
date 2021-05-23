const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').config()
const stores = require("./routes/stores");
const products = require("./routes/products");



app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



require('./config/keys');

app.use("/api", stores);
app.use("/api", products);
app.use('/images',express.static('images'));




const port = process.env.PORT || 3002;

  
app.listen(port, () => {
console.log('Example app listening on port !',port);
});