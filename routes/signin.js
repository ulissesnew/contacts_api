const express = require("express");
const router = express.Router();
const { signinController } = require("../controller/signin");

router.post("/signin", async (req, res) => {
  const form = req.body;

  if (!form.email) {
    res.status(400).json({ error: "email  incorrect" });
  }
  if (!form.password) {
    res.status(400).json({ error: "password  incorrect" });
  }
  if (form.email && form.password) {
    try {
      const signin = await signinController(req, res, form);
      console.log(signin);
      return signin;
    } catch (err) {
      res.status(400).json({ error: "email not found" });
    }
  }
});

module.exports = router;
