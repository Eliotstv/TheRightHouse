//using express
const express = require("express");
//i need the consts from my controller (house)
const {
  getHouse,
  postHouse,
  putHouse,
  getAllHouses,
  delHouse,
} = require("../controllers/houseController");
//i need the consts from my controller (user)
const {
  getUser,
  postUser,
  getAllUsers,
} = require("../controllers/userController");
//I also  want the suggestions = top three, from my controller (likedhousescontroller)
const {
  getIntelligentTopThree,
} = require("../controllers/likedHousesController");

let apiRouter = express.Router();
//all the router routes
//to get all houses
apiRouter.get("/houses", getAllHouses);
//to get a specific house with id
apiRouter.get("/houses/getHouse/:id", getHouse);
//to update a house
apiRouter.post("/houses/updateHouse", postHouse);
//to add a house
apiRouter.put("/houses/addHouse", putHouse);
//to delete a house
apiRouter.delete("/houses/deleteHouse", delHouse);

// to get all the users
apiRouter.get("/users", getAllUsers);
//to get a specific user by id
apiRouter.get("/users/getUser/:id", getUser);
//to update an user
apiRouter.post("/users/postUser", postUser);

//to get the matchmaking of a particular id
apiRouter.get("/likedHouses/topThreeForUser/:id", getIntelligentTopThree);

//exporting my api router
module.exports = apiRouter;
