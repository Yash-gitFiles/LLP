const productSchema = require("../model/productModel");

async function createProduct(req, res) {
  // const { productName, productDesc } = req.body;

  try {
    // if (!req.file) {
    //   return res.status(400).json({
    //     message: "No file uploaded",
    //     success: false,
    //   });
    // }

    const newProduct = new productSchema({
      // productName,
      // productDesc,
      img: req.file.path,
    });

    await newProduct.save();

    return res.status(200).json({
      message: "Product created successfully",
      data: newProduct,
      success: true,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      message: "internal server error",
      success: false,
    });
  }
}

async function getProducts(req, res) {
  const { page = 1, limit = 10 } = req.query;
  const products = await productSchema.find()
    .skip((page - 1) * limit)
    .limit(Number(limit));
    
  return res.status(200).json({
    message: "Products received successfully",
    success: true,
    data: products,
  });
}


module.exports = {
  createProduct,
  getProducts,
};
