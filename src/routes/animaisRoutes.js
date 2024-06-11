const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // res.send("deu certo");
  res.render("animais");
});

module.exports = router;
