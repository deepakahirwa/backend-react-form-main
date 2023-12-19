import mongoose from "mongoose";
import User from "../model/User.js";


export const getUser = async (req, res,) => {
    const user = await User.findOne({ id: req.id });
    if(!user) res.status(400).send("user not found");
    const { password, ...others } = user._doc;
    res.send(others);
};

export const updateUser = async (req, res,) => {
    try {
        await User.findOneAndUpdate(req.id, {
            payment: true
        });
        res.send('payment done');
  
      } catch(err) {
          console.log("error");
          res.send(400).send('Server Error');
      }
}; 
 