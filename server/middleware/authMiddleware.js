import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config()
const authCheck = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token)
     return res.status(401).json({ msg: "No token , authorization denied" });
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    
    next();
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};
export default authCheck;