import Bills from "../models/billsModel.js";

export const createBills = async (req, res) => {
  try {
    const newBills = new Bills({ ...req.body, verified: true });
    await newBills.save();
    res.status(200).json("Invoice created Sucessfully");
  } catch (error) {
    console.log(error);
  }
};

export const getBills = async (req, res) => {
  try {
    const products = await Bills.find();
    res.status(200).send(products);
  } catch (error) {
    console.log(error);
  }
};
