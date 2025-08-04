import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const loginPage = (req, res) => {
  res.render("admin/login", { layout: false });
};

export const adminLogin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid Credentials" });
    }

    const jwtData = { id: user._id, fullname: user.fullname, role: user.role };

    const token = jwt.sign(jwtData, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.cookie("token", token, { httpOnly: true, maxAge: 60 * 60 * 1000 });
    res.redirect("/admin/dashboard");
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid Credentials" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

export const logout = (req, res) => {
  res.clearCookie("token");
  res.redirect("/admin/");
};

export const allUsers = async (req, res) => {
  const users = await User.find();
  const formattedUsers = users.map((user) => ({
    id: user._id, // MAPPED from _id
    fullname: user.fullname,
    username: user.username,
    role: req.user.role,
  }));

  res.render("admin/users", { users: formattedUsers });
};

export const dashboard = (req, res) => {
  res.render("admin/dashboard", { user: req.user });
};

export const settings = (req, res) => {
  res.render("admin/settings", { role: req.user.role });
};

export const addUserPage = (req, res) => {
  res.render("admin/users/create", { role: req.user.role });
};

export const addUser = async (req, res) => {
  await User.create(req.body);
  res.redirect("/admin/users");
};

export const updateUserPage = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    if (!user) {
      res.status(404).send("User not found");
    }
    res.render("admin/users/update", { user, role: req.user.role });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { fullname, password, role } = req.body;
  try {
    const user = await User.findByIdAndUpdate(id);
    if (!user) {
      res.status(404).send("User not found");
    }

    user.fullname = fullname || user.fullname;
    if (password) {
      user.password = await bcrypt.hash(password, 10);
    }
    user.role = role || user.role;
    await user.save();
    res.redirect("/admin/users");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).send("User deleted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};
