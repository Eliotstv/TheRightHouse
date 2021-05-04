//same as house controller but for users
const {
  readUser,
  readAllUsers,
  deleteUser,
  createUser,
  updateUser,
  User,
} = require("../models/userModel");
//get an user
const getUser = (req, res) => {
  const { id } = req.params;
  res.send(readUser(id));
};
//get all the users
const getAllUsers = (req, res) => {
  res.send(readAllUsers());
};
//delete a user
const delUser = (req, res) => {
  const { id } = req.params;
  res.send(deleteUser(id));
};
//adding a user
const addUser = (req, res) => {
  try {
    const { iduser, firstname, lastname, email, password } = req.body;
    let User = new User(iduser, firstname, lastname, email, password);
    createUser(User);
    res.status(200).json({ status: "ok" });
  } catch (err) {
    res.send(err); // TODO CHECK
  }
};
//update a user
const majUser = (req, res) => {
  try {
    const { iduser, firstname, lastname, email, password } = req.body;
    let User = new User(iduser, firstname, lastname, email, password);
    updateUser(User);
    res.status(200).json({ status: "ok" });
  } catch (err) {
    res.send(err); // TODO CHECK
  }
};
//exporting everything to be able to use it
module.exports = {
  getUser: getUser,
  addUser: addUser,
  delUser: delUser,
  postUser: majUser,
  getAllUsers: getAllUsers,
};
