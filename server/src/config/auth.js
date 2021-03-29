const jwt = require("jsonwebtoken");
/**
 * Creates an authenticator auth
 * @author GQ
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 * @returns {object} Status of authentication error
 */
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.replace("Bearer ", "");
    console.log(token);
    const decoded = jwt.verify(token, "secret");
    req.userData = decoded;
    // console.log(req.userData);
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Authentification Failed"
    });
  }
};