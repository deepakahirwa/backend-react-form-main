import mongoose from "mongoose";
import User from "../model/User.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res, next) => {
  console.log("here")
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });
    await newUser.save();
    res.status(200).send("User has been created!");
    console.log("User has been created!");
  } catch (err) {
    next(err);
  }
}; 

export const signin = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next("User not found!");
    const isCorrect = await bcrypt.compare(req.body.password, user.password);

    if (!isCorrect) return next("Wrong Credentials!");

    // const token = jwt.sign({ id: user._id }, process.env.JWT);
    const { password, ...others } = user._doc;
    console.log("success")
    // res
    //   .cookie("access_token", token, {
    //     httpOnly: true,
    //   })
    //   .status(200)
    //   .json(others);

    res
    .status(200)
    .json(others);
    res.status(200).send(user);

  } catch (err) {
    next(err);
  }
};