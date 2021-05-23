const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    product: {
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
    },
    supply: {
        type: String,
        required: true,
    },
    uploader: {
        type: Schema.Types.ObjectId,
        ref: 'Store'
      },
},{
    timestamps: true
  }
);



module.exports = mongoose.model('Product', productSchema);