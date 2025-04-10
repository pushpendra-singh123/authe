const express = require("express");
const userRouter = express.Router();
const { empRegister } = require("../controllers/emp");

// Example POST route for employee registration
userRouter.post("/addemp", empRegister);

module.exports = userRouter;