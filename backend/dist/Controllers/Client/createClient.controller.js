"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createClient_service_1 = __importDefault(require("../../Services/Client/createClient.service"));
const createClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, cellphone, password, isAdmin } = req.body;
        const newClient = yield (0, createClient_service_1.default)({
            name,
            email,
            cellphone,
            password,
            isAdmin,
        });
        return res.status(201).json(newClient);
    }
    catch (err) {
        if (err instanceof Error) {
            return res.status(400).json({
                message: err.message,
            });
        }
    }
});
exports.default = createClientController;
