const mariadb = require("mariadb");

function getDB() {
  try {
    const pool = mariadb.createPool({
      host: "127.0.0.1",
      user: "root",
      port: "13306",
      password: "5045",
      database: "web_week",
      connection: 5,
    });
    if (pool) {
      console.log("db 생성 완료");
      return pool;
    } else {
      throw new Error("db 생성 실패");
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = getDB;
