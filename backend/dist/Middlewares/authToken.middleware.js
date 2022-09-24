"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyAuthToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json("Unauthorized! Token not found");
    }
    jsonwebtoken_1.default.verify(token, "SECRET_KEY", (error, decoded) => {
        if (error) {
            return res.status(401).json("Invalid token");
        }
        next();
    });
};
exports.default = verifyAuthToken;
