//I need the database connection to be able to those procedures
const connection = require("./databaseConnection");
//this is my House model (without category)
class House {
  constructor(idhouse, shortdesc, note, title, fulldesc, picturePath) {
    this.idhouse = idhouse;
    this.shortdesc = shortdesc;
    this.note = note;
    this.title = title;
    this.fulldesc = fulldesc;
    this.picturePath = picturePath;
  }
}
//I can create a house like this
const createHouse = (house) => {
  const { shortdesc, note, title, fulldesc, picturePath } = house;
  const query = `INSERT INTO house (shortdesc, note, title, fulldesc, picturePath, category) VALUES ("${shortdesc}", "${note}", "${title}", "${fulldesc}", "${picturePath}", "");`;
  connection.query(query);
};
//I can read a house like this
const readHouse = (id) =>
  connection.query(`SELECT * FROM house WHERE idhouse = ${id};`);
//Read all houses
const readAllHouses = () => connection.query(`SELECT * FROM house;`);
//Update a house
const updateHouse = (house) => {
  const { idhouse, shortdesc, note, title, fulldesc, picturePath } = house;
  const query = `
    UPDATE house
    SET 
      shortdesc = "${shortdesc}",
      note = "${note}",
      title = "${title}",
      fulldesc = "${fulldesc}",
      picturePath = "${picturePath}"
    WHERE idhouse = ${idhouse};`;
  connection.query(query); //not good
};

//delete a house
const deleteHouse = (id) =>
  connection.query(`DELETE FROM house WHERE idhouse = ${id};`);
//read the house it's category
const readHouseCategories = (id) =>
  connection.query(
    `SELECT category FROM housecategories WHERE idhouse = ${id};`
  );
//exporting everything to be able to use it
module.exports = {
  createHouse: createHouse,
  readAllHouses: readAllHouses,
  readHouse: readHouse,
  updateHouse: updateHouse, //TODO
  deleteHouse: deleteHouse,
  readHouseCategories: readHouseCategories,
  House: House,
};
