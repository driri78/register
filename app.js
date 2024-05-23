const express = require("express");
const app = express();
const rootRouter = require("./router/root");
const registerRouter = require("./router/register");
app.set("port", process.env.PORT || 3000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.use(express.static("public"));
app.use("/", rootRouter);
app.use("/register", registerRouter);

app.listen(app.get("port"), () => {
  console.log(`${app.get("port")}번에서 실행중`);
});
