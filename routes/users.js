const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("rota de usuários");
});

router.get("/cool", function (req, res, next) {
  res.send("rota cool");
});

router.get("/cool/beach", function (req, res, next) {
  res.send("rota beach");
});

router.get("/ifc", function (req, res, next) {
  res.send("rota ifc");
});

module.exports = router;
