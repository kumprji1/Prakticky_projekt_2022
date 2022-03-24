const express = require("express");

const router = express.Router();

router.get("/prvni-workshop", (req, res, next) => {
  res.render("firstWorkshop");
});

module.exports = router;
