import User from "../models/userModel.js";

export const registerUser = async (req, res) => {
  try {
    let newUser = new User({...req.body, verified:true});
    await newUser.save();
    res.status(200).json("Registration Sucessful");
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (req, res) => {
  try {
    const {email, password } = req.body;
    const user = await User.findOne({ email, password, verified: true });
    console.log("USER",user);
    
    if(user){
        res.status(200).send(user);
    }else{
        res.status(400).json({
          message: "Login Fail",
          user,
        });
    }
    
  } catch (error) {
    console.log(error.message);
  }
};
