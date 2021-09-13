let express = require("express");
let router = express.Router();
let userController = require("../controller/user.controller");

router.post("/signUp",userController.signUp);
router.post("/signIn",userController.signIn);

module.exports = router;