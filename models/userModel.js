// I need the database connection
const connection = require("./databaseConnection");
//this is how i create a user
class User {
  constructor(iduser, firstname, lastname, email, password, categories) {
    this.iduser = iduser;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.categories = categories;
  }
}

// TODO update naming to match CRUD operations
//to create an user
const createUser = (User) => {
  const { idhouse, shortdesc, note, title, category, fulldesc } = house;
  const query = `INSERT INTO user (iduser, firstname, lastname, email, password) VALUES (${iduser}, "${firstname}", "${lastname}", "${email}", "${password}");`;
  connection.query(query);
};
//to read an user
const readUser = (id) =>
  connection.query(`SELECT * FROM user WHERE iduser = ${id};`);

const readUserInstance = (id) => {
  const dbRes = connection.query(`SELECT * FROM user WHERE iduser = ${id};`)[0];
  dbRes.categories = readUserCategories(id).map((obj) => obj.category);
  return new User(...dbRes);
};
//to read all users
const readAllUsers = () => connection.query(`SELECT * FROM user;`);
//to update an user
const updateUser = (id) =>
  connection.query(`UPDATE * FROM user WHERE iduser = ${id};`); //not good
//to delete an user
const delUser = (id) =>
  connection.query(`DELETE * FROM user WHERE iduser = ${id};`);
//to read the user's category
const readUserCategories = (id) =>
  connection.query(`SELECT category FROM usercategories WHERE iduser = ${id};`);
//exporting everything to be able to use it
module.exports = {
  createUser: createUser,
  readAllUsers: readAllUsers,
  readUser: readUser,
  updateUser: updateUser, // TODO
  deleteUser: delUser,
  readUserCategories: readUserCategories,
  User: User,
};
