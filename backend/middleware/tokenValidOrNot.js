const jwt = require("jsonwebtoken");

const tokenVerification = async (req, res, next) => {
  const auth = req.headers["authorization"];

  if (!auth) {
    return res.status(401).send({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(auth, "Key");
    req.user = decoded;
    next();
  } catch (err) {
    console.log("err", err);
    return res.status(401).send({ message: "Invalid token" });
  }
};

module.exports = {
  tokenVerification,
};
