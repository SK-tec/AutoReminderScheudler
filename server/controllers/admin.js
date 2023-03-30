const Admin = require("../models/admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const register = async (req, res) => {
  try {
    const admin = await Admin.create(req.body);
    const payload = {
      _id: admin._id,
      username: admin.username,
      email: admin.email,
    };
    const userToken = jwt.sign(payload, JWT_SECRET);
    const options = { httpOnly: true, expires: new Date(Date.now() + 9000000) };
    console.log("JWT TOKEN", userToken);
    res
      .status(201)
      .cookie("userToken", userToken, options)
      .json({ user: payload });
  } catch (error) {
    res.status(500).json({ message: error.message, errors: error.errors });
  }
};
const login = async (req, res) => {
  const adminDocument = await Admin.findOne({ email: req.body.email });
  console.log("Admin", adminDocument.password, req.body.password);
  if (!adminDocument) {
    res.status(400).json({ message: "Invalid Login Attempt" });
  } else {
    try {
      const isPasswordValid = await bcrypt.compare(
        req.body.password,
        adminDocument.password
      );
      if (!isPasswordValid) {
        res.status(400).json({ message: "Invalid Login Attempt" });
      } else {
        const payload = {
          _id: adminDocument._id,
          username: adminDocument.username,
          email: adminDocument.email,
        };
        const userToken = jwt.sign(payload, JWT_SECRET);
        const options = {
          httpOnly: true,
          expires: new Date(Date.now() + 9000000),
        };
        console.log("LogedIn successfully");
        //console.log('JWT TOKEN', userToken);
        res.cookie("userToken", userToken, options).json({ user: payload });
      }
    } catch (error) {
      res.status(500).json({ message: error.message, errors: error.errors });
    }
  }
};
const logout = (req, res) => {
  res.clearCookie("userToken");
  res.json({ message: "You have Successfully Logged Out!" });
};
const getLoggedInUser = async (req, res) => {
  try {
    const getAdmin = await Admin.findOne({ _id: req.user._id }).select(
      "-password"
    );
    res.json(getAdmin);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  register,
  login,
  logout,
  getLoggedInUser,
};
