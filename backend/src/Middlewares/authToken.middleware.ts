import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const verifyAuthToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json("Unauthorized! Token not found");
  }

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return res.status(401).json("Invalid token");
    }
    next();
  });
};

export default verifyAuthToken;
