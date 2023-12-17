import jwt from "jsonwebtoken";
import { SECRET_TOKEN } from "../config.js";

export const tokenRequired = (req, res, next) => {
  console.log("validating token");
  try {
    const { token } = req.cookies;
    if (!token) return res.status(401).json({ message: "No token. Acceso denegado." });
    jwt.verify(token, SECRET_TOKEN, (err, user) => {
      if (err) return res.status(403).json({ message: "Invalid Token" });
      req.user = user
      next();
    });
  } catch (err) {
    console.log(err);
  }
};
