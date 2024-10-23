const express = require("express");
const { tokenVerification } = require("../middleware/tokenValidOrNot");
const { createProduct , getProducts } = require("../controller/productController");
const upload = require("../config/multer");

const router = express.Router();

router.post("/", tokenVerification, upload.single("file"), createProduct);
router.get("/getProducts" ,  tokenVerification , getProducts);


module.exports = router;
