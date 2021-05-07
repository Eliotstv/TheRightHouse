//I need the database connection file
const connection = require("./databaseConnection");
//using an inner join to like a  house as an user
const LikedHouse = (id) => {
  const { iduser, idhouse } = LikedHouseByUser;
  const query = `SELECT * FROM user INNER JOIN house WHERE user.iduser = house.idhouse VALUES (${iduser}, "${idhouse}");`;
  connection.query(query);
};
//these two const's are currently not in use
const housesLikedByUser = "Return users then houses";

const usersLikingHouse = "Giving house and then look for users";

module.exports = { LikedHouse: LikedHouse };
