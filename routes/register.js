const express = require("express");
const router = express.Router();
const { encryptPassword } = require("../controller/encrypt");
const { registerController } = require("../controller/register");

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const encrypt = await encryptPassword(password);
  const form = {
    name: name,
    email: email,
    password: encrypt,
  };

  if (form) {
    const response = await registerController(req, res, form);
    console.log(response);
    return response;
  }
});

module.exports = router;
