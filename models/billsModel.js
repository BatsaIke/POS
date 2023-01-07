import mongoose from "mongoose";

//db table
const billsSchema = mongoose.Schema(
  {
    customername: {
      type: String,
      required: true,
    },
    paymentmethod: {
      type: String,
      required: true,
    },
    customerphone: {
      type: Number,
      required: true,
    },
    totalamount: {
      type: Number,
      required: true,
    },

    sellername: {
      type: String,
      required: true,
    },
    // date: {
    //   type: Date,
    //   required: true,
    // },
    cartItems: {
      type: Array,
      require: true,
    },
  },
  { timestamps: true }
);

const Bills = mongoose.model("Bills", billsSchema);
export default Bills;
