import mongoose from "mongoose";

//db table
const UserSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,

    },
  },
  { timestamps: true }
);

const User = mongoose.model("Users", UserSchema);
export default User;
