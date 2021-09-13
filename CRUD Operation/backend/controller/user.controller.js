let bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");
let userModel = require("../model/user.model");

let signUp = async (req,res)=> {
    let user = req.body;
    let salt =await bcrypt.genSalt(10)
    let hasPassword = await bcrypt.hash(user.password,salt);
    let userRef = new userModel({
        email:user.email,
        name:user.name,
        password:hasPassword,
        user_type:user.user_type
    });
    userModel.insertMany(userRef,(err,doc)=> {
        if(!err){
                res.send("Account created successfully");
        }else {
                res.send(err);
        }
    })
}

let signIn = async (req,res)=> {
        let user = req.body;
        console.log("I Came here")
        console.log(user)
        userModel.findOne({email:user.email}, async (err,result)=> {
                if(!err){
                    
                    if(result){
            let validPassword = await bcrypt.compare(user.password,result.password);
                      if(!validPassword){
                          res.send("Invalid password");
                      }  else {
                          let payload = {id:result._id,user_type:result.user_type}
                          let token = await jwt.sign(payload,"secretKey");
                          res.send({"token":token});
                      }
                    } else {
                        res.send("Invalid emaild id");   
                    } 

                }else {
                        res.send(err)
                }
        })
}

module.exports = {signUp,signIn}