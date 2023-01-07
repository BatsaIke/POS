import Product from "../models/productsModel.js";

export const getProductController = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    console.log(error);
  }
};

export const createProducts = async (req, res) => {
  try {
    let products = new Product(req.body);
    await products.save("created succesfuly");
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (req, res) => {
  try {
    await Product.findOneAndUpdate({ _id: req.body.productId }, req.body);
    res.status(200).json("Update succesful");
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Product.findOneAndDelete({ _id: req.body.productId });
    res.status(200).json("Delete succesful");
  } catch (error) {
    console.log(error);
  }
};
