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
const updateContact_service_1 = __importDefault(require("../../Services/Contacts/updateContact.service"));
const updateContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, newName, newEmail, newCellphone } = req.body;
        if (!id) {
            throw new Error("ID not found");
        }
        const client = yield (0, updateContact_service_1.default)({
            id,
            name,
            newName,
            newEmail,
            newCellphone,
        });
        return res.status(201).json({ message: "Client updated", client: client });
    }
    catch (err) {
        if (err instanceof Error) {
            return res.status(404).send({
                message: err.message,
            });
        }
    }
});
exports.default = updateContactController;
