const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");

let app = express();

//bodyparser pour récupérer des variables
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const router = require("./routes/routes");
app.use("/", router);

app.use(express.static("public"));

//launch server
app.listen(3000, function () {
  console.log("server is running on port 3000");
});
