const User = require("../models/user");
var jwt = require("jsonwebtoken");
const { comparePassword } = require("../controller/encrypt");

const signinController = async (req, res, form) => {
  try {
    const checkUser = await User.findOne({ email: form.email });
    const compare = await comparePassword(form.password, checkUser.password);

    if (compare) {
      const signToken = jwt.sign({ email: form.email }, "shhhhh", {
        expiresIn: "10d",
      });
      console.log(signToken);
      console.log(checkUser);
      res.status(200).json({ message: "success", token: signToken });
    } else {
      res.status(400).json({ error: "email or password  incorrect" });
    }
  } catch (err) {
    res.status(400).json({ error: "email not found" });
  }
};

module.exports = {
  signinController: signinController,
};
