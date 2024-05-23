const fs = require("fs").promises;
const path = require("path");
const pool = require("../model/db");

const getRegister = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "views", "register.html"));
};

const sendRegister = async (req, res) => {
  const { userName, userId, userPwd, userAddr, userPhone, userEmail } =
    req.body;
  try {
    let conn = await pool.getConnection();
    if (conn) {
      const sql = `insert into users(user_name, user_id, user_pwd, user_addr, user_phone, user_email)
                               values(?,?,?,?,?,?)`;
      const result = await conn.query(sql, [
        userName,
        userId,
        userPwd,
        userAddr,
        userPhone,
        userEmail,
      ]);
      if (result.affectedRows !== 0) {
        res.send({ message: "회원가입 성공" });
      } else {
        res.send({ message: "회원가입 실패" });
      }
    } else {
      throw new Error("db 연결 실패");
    }
  } catch (err) {
    console.log(err);
  }
};
const validationUserName = async (req, res) => {
  const { userId } = req.body;
  try {
    let conn = await pool.getConnection();
    if (conn) {
      const sql = `SELECT count(*) as count FROM users WHERE user_id = ?;`;
      const result = await conn.query(sql, [userId]);
      if (result[0].count.toString() !== "0") {
        res.send({ message: "사용할수 없는 아이디 입니다" });
      } else {
        res.send({ message: "사용가능한 아이디 입니다" });
      }
    } else {
      throw new Error("db 연결 실패");
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
