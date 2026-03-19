const express = require("express");
const router = express.Router();
const {registerUser} = require("./usercontroller");
const {loginUser} = require("./usercontroller");

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;