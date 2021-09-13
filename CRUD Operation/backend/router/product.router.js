let express = require("express");
let router = express.Router();
let productController = require("../controller/product.controller");

router.post("/storeProduct",productController.storeProduct);
router.get("/retrieveProduct",productController.retrieveProduct);
router.delete("/deleterProduct/:pid",productController.deleteProduct);
router.put("/updateProduct",productController.updateProduct);

module.exports = router;