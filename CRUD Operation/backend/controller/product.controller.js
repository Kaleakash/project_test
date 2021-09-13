let productModel = require("../model/product.model");

let storeProduct = (req,res)=> {
    let product = req.body;     // receive data from post method body part 
    console.log(product);
    productModel.insertMany(product,(err,result)=> {
        if(!err){
            res.send("Record stored successfully");
        }else {
            res.send(err);
        }
    })
}
let retrieveProduct = (req,res)=> {
    productModel.find({},(err,doc)=> {
        if(!err){
            res.send(doc);
        }else {
            res.send(err);
        }
    })
}

let deleteProduct = (req,res)=> {
    let pid = req.params.pid;
    productModel.deleteOne({_id:pid},(err,result)=> {
        if(!err){
               if(result.deletedCount>0){
                    res.send("Record deleted successfully");
               }else {
                    res.send("Record not present");
               }
        }else {
                res.send(err);
        }
    })
}

let updateProduct = (req,res)=> {
    let product = req.body;
    productModel.updateOne({_id:product._id},
        {$set:{price:product.price}},(err,result)=> {
            if(!err){
                if(result.modifiedCount>0 || result.matchedCount>0){
                        res.send("Record updated successfully");
                }else {
                        res.send("record didn't update");
                }
            }else {
                res.send(err);
            }
        })
}
module.exports={storeProduct,retrieveProduct,deleteProduct,updateProduct}