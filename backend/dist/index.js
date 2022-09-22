"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./Routes/routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = 3333;
app.use(routes_1.default);
app.listen(port, () => `Server is running ${port}`);
