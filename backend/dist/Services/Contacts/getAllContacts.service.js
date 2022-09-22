"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../../data-source");
const contacts_entities_1 = require("../../Entities/contacts.entities");
const getAllContactsServices = () => {
    const contactRepository = data_source_1.AppDataSource.getRepository(contacts_entities_1.Contacts);
    const contacts = contactRepository.find();
    return contacts;
};
exports.default = getAllContactsServices;
