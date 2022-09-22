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
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../../data-source");
const client_entities_1 = require("../../Entities/client.entities");
const contacts_entities_1 = require("../../Entities/contacts.entities");
const getContactsService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const contactRepository = data_source_1.AppDataSource.getRepository(contacts_entities_1.Contacts);
    const clientRepository = data_source_1.AppDataSource.getRepository(client_entities_1.Client);
    const client = yield clientRepository.find();
    const account = client.find((client) => client.id === id);
    const contacts = yield contactRepository.find();
    const contactAlreadyExists = contacts.filter((contact) => contact.client.id === id);
    if (!account) {
        throw new Error("Client not found");
    }
    return contactAlreadyExists;
});
exports.default = getContactsService;
