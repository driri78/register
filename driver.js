// const {sequelize} = require('./models/index.js')
const { sequelize } = require("./models");
const driver = () => {
  sequelize
    .sync({ force: true })
    .then(() => {
      console.log("초기화 완료");
    })
    .catch((err) => {
      console.error("초기화 실패");
      console.error(err);
    });
};

driver();

/**
 * 1. npm i sequelize sequelize-cli
 * 2. 모델 : table 만들기
 * 3. models/index.js 모델과 sequelize를 Mapping(연결)
 * 4. 실행
 */
