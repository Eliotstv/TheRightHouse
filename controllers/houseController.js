//the 5 consts with the house  required from my model house
const {
  readHouse,
  readAllHouses,
  deleteHouse,
  createHouse,
  updateHouse,
  House,
} = require("../models/houseModel");

//to get a house
const getHouse = (req, res) => {
  const { id } = req.params;
  res.send(readHouse(id));
};
//to get all te houses
const getAllHouses = (req, res) => {
  res.send(readAllHouses());
};
//to delete a house
const delHouse = (req, res) => {
  const { id } = req.body;
  console.log("DELETE REQUEST: ", id);
  res.send(deleteHouse(id));
};
//to update a house
const postHouse = (req, res) => {
  try {
    const { idhouse, shortdesc, note, title, fulldesc, picturePath } = req.body;
    let house = new House(
      idhouse,
      shortdesc,
      note,
      title,
      fulldesc,
      picturePath
    );
    updateHouse(house);
    res.status(200).json({ status: "ok" });
  } catch (err) {
    res.send(err); // TODO CHECK
  }
};

// to make a new house
const putHouse = (req, res) => {
  try {
    const { shortdesc, note, title, fulldesc, picturePath } = req.body;
    let house = new House(null, shortdesc, note, title, fulldesc, picturePath);
    createHouse(house);
    res.status(200).json({ status: "ok" });
  } catch (err) {
    res.send(err); // TODO CHECK
  }
};
//exporting everything to be able to use it
module.exports = {
  getHouse: getHouse,
  putHouse: putHouse,
  delHouse: delHouse,
  postHouse: postHouse,
  getAllHouses: getAllHouses,
};
