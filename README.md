```javascript
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
```

- Update categories
- User login support
- CSS and styling
