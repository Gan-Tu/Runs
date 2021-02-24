var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "run.sh domain",
    body: "Welcome to Gan's new project",
  });
});

module.exports = router;
