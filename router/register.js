const express = require("express");
const router = express.Router();
const {
  getRegister,
  validationUserName,
  sendRegister,
  UserDelete,
} = require("../controllers/register");

router
  .get("/", getRegister)
  .post("/userName", validationUserName)
  .post("/", sendRegister)
  .delete("/Info", UserDelete);

module.exports = router;
