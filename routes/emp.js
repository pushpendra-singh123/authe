const express = require("express");
const router = express.Router();
const emp = require("../controllers/emp");

router.post("/addemp", emp.empRegister);
module.exports = router;
