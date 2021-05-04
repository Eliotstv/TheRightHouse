//Matchmaking with the categories
//require the usermodel and the housemodel
const { readUserCategories, readUser } = require("../models/userModel");
const { readAllHouses, readHouseCategories } = require("../models/houseModel");

//a function to calculate the score
function calculateScore(house, user) {
  const user_categories = user.categories;
  const house_categories = house.categories;
  //max possible match is here determined with the lenght of the house categories
  const maxPossibleMatch = house_categories.length;
  let matchCount = 0;
  for (const house_categorie of house_categories) {
    if (user_categories.includes(house_categorie))
      // MATCH
      matchCount++;
    //Increment +1
  }
  //returning the matches over the max possible matches to have a score
  return matchCount / maxPossibleMatch;
}

const getIntelligentTopThree = (req, res) => {
  const { id } = req.params;
  const user = readUser(id);
  const user_categories = readUserCategories(id).map(
    (categoryObject) => categoryObject.category
  );
  user.categories = user_categories;

  const allHouses = readAllHouses().map((house) => {
    // house does not have its categories yet
    const listOfCategoryObjects = readHouseCategories(house.idhouse);
    const listOfCategories = listOfCategoryObjects.map((obj) => obj.category);
    house.categories = listOfCategories;
    return house;
  });

  const scores = allHouses.map((house) => {
    const score = calculateScore(house, user);
    return [score, house];
  });

  // scores = [[0.1, house1], [0.7, house1], [0.2, house1], ...]
  scores.sort((houseScore1, houseScore2) => houseScore2[0] - houseScore1[0]);
  // scores = [[0.7, house1], [0.2, house1], ...]
  const topThreeWithScore = scores.slice(0, 3);

  // const allHouses = res.send();
  res.json([user_categories, ...topThreeWithScore]);
};

const getUserLiked = (req, res) => {
  const { id } = req.params;
};
//exporting everything to be able to use it
module.exports = {
  getIntelligentTopThree: getIntelligentTopThree,
};
