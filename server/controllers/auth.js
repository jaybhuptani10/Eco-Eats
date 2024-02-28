const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Donation = require("../models/donation");

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      msg: "Bad request. Please add email and password in the request body",
    });
  }

  let foundUser = await User.findOne({ email: req.body.email });
  if (foundUser) {
    const isMatch = await foundUser.comparePassword(password);

    if (isMatch) {
      const token = jwt.sign(
        { id: foundUser._id, name: foundUser.name ,role:foundUser.role},
        process.env.JWT_SECRET,
        {
          expiresIn: "30d",
        }
      );

      return res.status(200).json({ msg: "user logged in", token });
    } else {
      return res.status(400).json({ msg: "Bad password" });
    }
  } else {
    return res.status(400).json({ msg: "Bad credentails" });
  }
};

const dashboard = async (req, res) => {

  res.status(200).json({
    msg: `Hello, ${req.user.name}`,
  });
};

const getAllUsers = async (req, res) => {
  let users = await User.find({});

  return res.status(200).json({ users });
};

const register = async (req, res) => {
  let foundUser = await User.findOne({ email: req.body.email });
  if (foundUser === null) {
    let { username, email, password ,role} = req.body;
    if (username.length && email.length && password.length && role.length) {
      const person = new User({
        name: username,
        email: email,
        password: password,
        role:role,
      });
      await person.save();
      return res.status(201).json({ person });
    }else{
        return res.status(400).json({msg: "Please add all values in the request body"});
    }
  } else {
    return res.status(400).json({ msg: "Email already in use" });
  }
};


const createDonation = async (req, res) => {
    
    const newDonation = new Donation(req.body);
    try {
      await newDonation.save();
      res.status(201).json(newDonation);
    } catch (error) {
      res.status(400).json({ error: error.toString() });
    }
  
};

module.exports = {
  login,
  register,
  dashboard,
  getAllUsers,
  createDonation,
};