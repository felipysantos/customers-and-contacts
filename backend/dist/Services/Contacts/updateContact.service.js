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
const contacts_entities_1 = require("../../Entities/contacts.entities");
const client_entities_1 = require("../../Entities/client.entities");
const updateContactsService = ({ id, name, newName, newEmail, newCellphone, }) => __awaiter(void 0, void 0, void 0, function* () {
    const contactRepository = data_source_1.AppDataSource.getRepository(contacts_entities_1.Contacts);
    const clientRepository = data_source_1.AppDataSource.getRepository(client_entities_1.Client);
    const client = yield clientRepository.find();
    const account = client.find((client) => client.id === id);
    const contacts = yield contactRepository.find();
    const contactAlreadyExists = contacts.filter((contact) => contact.name === name);
    if (!contactAlreadyExists) {
        throw new Error(contactAlreadyExists);
    }
    const contactAlreadyExistsInClient = contactAlreadyExists.find((client) => client.client.id === id);
    if (!account) {
        throw new Error("Client not found");
    }
    if (!contactAlreadyExistsInClient) {
        throw new Error("Contact not exists");
    }
    yield contactRepository.update(contactAlreadyExistsInClient.id, {
        name: newName,
        email: newEmail,
        cellphone: newCellphone
    });
    const updateContacts = yield contactRepository.find();
    const updatedContact = updateContacts.filter((contact) => contact.name === newName);
    return updatedContact;
});
exports.default = updateContactsService;
