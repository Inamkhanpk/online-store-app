const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const storeSchema = new Schema({
    name: {
        type: String,
        required: true,
        
    }, 

    photo: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true,
    }
},{
    timestamps: true
  }
);



module.exports = mongoose.model('Store', storeSchema);