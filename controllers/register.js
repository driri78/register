const fs = require("fs").promises;
const path = require("path");
const models = require("../models"); // index.js 생략가능

const getRegister = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "views", "register.html"));
};

const sendRegister = async (req, res) => {
  const { user_name, user_id, user_pwd, user_addr, user_phone, user_email } =
    req.body;
  try {
    await models.User.create({
      user_name,
      user_id,
      user_pwd,
      user_addr,
      user_phone,
      user_email,
    });

    res.send({ message: "회원가입 완료" });
  } catch (err) {
    console.log(err);
  }
};
const validationUserName = async (req, res) => {
  const { user_id } = req.body;
  try {
    const userData = await models.User.findAll({
      attributes: [
        [models.sequelize.fn("COUNT", models.sequelize.col("*")), "count"],
      ],
      where: {
        user_id,
      },
    });
    // console.log(userData[0]);
    if (userData[0].dataValues.count > 0) {
      res.send({ message: "아이디를 사용할수 없습니다" });
    } else {
      res.send({ message: "사용 가능한 아이디 입니다" });
    }
  } catch (err) {
    console.log(err);
  }
};
const UserDelete = (req, res) => {};

const registerFunction = {
  getRegister,
  validationUserName,
  sendRegister,
  UserDelete,
};

module.exports = registerFunction;
