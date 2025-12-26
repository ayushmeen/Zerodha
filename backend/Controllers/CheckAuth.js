const jwt = require("jsonwebtoken");

module.exports.checkAuth = (req, res) => {
  const token = req.cookies.token;
  console.log("TOKEN:", token);
  if (!token) {
    return res.status(401).json({ loggedIn: false });
  }

  try {
    jwt.verify(token, process.env.TOKEN_KEY);
    return res.json({ loggedIn: true });
  } catch {
    return res.status(401).json({ loggedIn: false });
  }
};
