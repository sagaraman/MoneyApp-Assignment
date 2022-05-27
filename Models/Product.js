const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    Name: { type: String, required: true },
    Price: { type: Number, required: true },
    cDate: {
        yyyy: { type: Number, required: true },
        dd: { type: Number, required: true },
        hh: { type: Number, required: true },
        mm: { type: Number, required: true },
        ss:{type:Number,required:true}
    },
    uDate: {
        yyyy: { type: Number, required: true },
        dd: { type: Number, required: true },
        hh: { type: Number, required: true },
        mm: { type: Number, required: true },
        ss:{type:Number,required:true}
    }
});
const product = mongoose.model('product', productSchema);
module.exports = product;
