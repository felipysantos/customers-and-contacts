"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = 3333;
const route = (0, express_2.Router)();
route.get("/", (req, res) => {
    res.json({ message: "Dale" });
});
app.use(route);
app.listen(port, () => `Server is running ${port}`);
