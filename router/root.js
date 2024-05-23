const express = require("express");
const router = express.Router();
const { getHome } = require("../controllers/root.js");

router.get("/", getHome);

module.exports = router;
