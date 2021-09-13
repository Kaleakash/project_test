// load the module 
let express = require("express");
let cors = require("cors");
let mongoose = require("mongoose");
let productRouter = require("./router/product.router");
let userRouter = require("./router/user.router");

let url = "mongodb://localhost:27017/project"
// creating the reference. 
let app= express();
// add middleware 
app.use(express.json());  // enable body data from post methods ie json data. 
app.use(cors());    //enable cors origin features. 
// connect the database 
mongoose.connect(url).
then(res=>console.log("connected successfully")).
catch(error=>console.log(error));
// map the main path 
// http://localhost:3000/api/product    main path 
// http://localhost:3000/api/product/storeProduct       post method 
// http://localhost:3000/api/product/retrieveProduct    get method 
// http://localhost:3000/api/product/deleterProduct/1   delete method
// http://localhost:3000/api/product/updateProduct      put method 
app.use("/api/product",productRouter);

// main path 
// http://localhost:3000/api/user/signUp        SingUp 
// http://localhost:3000/api/user/signIn        SingIn

app.use("/api/user",userRouter);
//running on port number 3000
app.listen(3000,()=>console.log("Server running on port number 3000"));