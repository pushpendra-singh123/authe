const express = require("express");
const uiRouter = express.Router();

uiRouter.get("/", (req, res) => {
  res.render("signup", { title: "signup" });
});
uiRouter.get("/login", (req, res) => {
  res.render("login", { title: "login" });
});

uiRouter.post("/login", (req, res) => {
  const { email, password } = req.body;
});
module.exports = uiRouter;
