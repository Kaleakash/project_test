let mongoose = require("mongoose");
mongoose.pluralize(null);
let productSchema = mongoose.Schema({
    _id:Number,
    pname:String,
    price: Number
});
// mongoose module automatically it create 
// collection name in lower and with post- fix. 

let productModel = mongoose.model("Product",productSchema);
module.exports= productModel;
