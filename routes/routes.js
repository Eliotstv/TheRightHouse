//this file is for other routes + testing routes

//i use express
const express = require("express");
//i require the routes from my other file apiRoutes
const apiRouter = require("./apiRoutes");
//initialize my router
let router = express.Router();
//using express static for my "/" route
router.use("/", express.static("views/public"));

//tests
router.get("/uglyexample", (req, res) => {
  const htmlPage = fs.readFileSync("../views/index.html", {
    encoding: "utf-8",
  });
  res.send(htmlPage);
});
//
//using my /api route
router.use("/api", apiRouter);
//exporting my router
module.exports = router;
