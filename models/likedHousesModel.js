//I need the database connection file
const connection = require("./databaseConnection");
//using an inner join to like a  house as an user
const LikedHouse = (id) => {
  const { iduser, idhouse } = LikedHouseByUser;
  const query = `SELECT * FROM user INNER JOIN house WHERE user.iduser = house.idhouse VALUES (${iduser}, "${idhouse}");`;
  connection.query(query);
};

const housesLikedByUser = "hieraan een user en dan houses returnen";

const usersLikingHouse = "hieraan een house meegeven en dan users opzoeken";

module.exports = { LikedHouse: LikedHouse };
