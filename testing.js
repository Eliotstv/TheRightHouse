function calculateScore(house, user) {
  const user_categories = user.categories;
  const house_categories = house.categories;

  const maxPossibleMatch = house_categories.length;
  let matchCount = 0;
  for (const house_categorie of house_categories) {
    if (user_categories.includes(house_categorie))
      // MATCH
      matchCount++;
  }

  return matchCount / maxPossibleMatch;
}

const user = {
  categories: '["large", "cosy", "cute"]',
};

const house = {
  categories: '["large", "cosy", "garden"],',
};

// console.log(calculateScore(house, user));

let arr = [
  [0.1, "house1"],
  [0.7, "house2"],
  [0.2, "house3"],
  [0.3, "house4"],
  [0.5, "house5"],
];

arr.sort((houseScore1, houseScore2) => houseScore2[0] - houseScore1[0]);
arr = arr.map((scoreComb) => scoreComb[1]);

// console.log(arr.slice(0, 3));

const houses = "qwertsdfghjklzxcvbnn".split("");
console.log(houses);
const id = "w";
houses.forEach((house, index) => {
  if (house === id) console.log(index);
});

/*
SERVER
database [
  house(1, TinyHouse),
  user(1, Eliot),
  userLikesHouse(hid,uid)
]


...

// controler likedHouses
app.post('/api/post/likesHouse, (req, res) => {
  const {user, username, house} = body.params.response
  likedHousesController.create(username, house)
})

...


CLIENT => I like => {user: 1, username: Eliot, house: 1} => /api/post/likesHouse

*/
```

- "api/houses/likedBy/:id"
- "api/houses/favorouite/:id"

```JavaScript
class House {
  constructor(idhouse, shortdesc, note, title, category, fulldesc) {
    this.idhouse = idhouse;
    this.shortdesc = shortdesc;
    this.note = note;
    this.title = title;
    this.category = category;
    this.fulldesc = fulldesc;

  }
}