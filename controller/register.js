const User = require("../models/user");
var jwt = require("jsonwebtoken");

const registerController = async (req, res, form) => {
  const user = new User(form);
  await user
    .save()
    .then((success) => {
      console.log(success);
      const signToken = jwt.sign({ email: form.email }, "shhhhh", {
        expiresIn: "24h",
      });
      console.log(signToken);
      res.status(200).json({ message: "success", token: signToken });
    })
    .catch((err) => {
      console.log("err");
      res.status(400).json({ error: " email already registered" });
    });
  console.log(user);
};

module.exports = {
  registerController: registerController,
};
