import jwt from 'jsonwebtoken'
import { SECRET_TOKEN } from "../config.js";

export const createAccessToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.sign(token, SECRET_TOKEN, { expiresIn: "2h" }, (err, token) => {
      if (err) reject (err)
      resolve(token);
    });
  });
};
