"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../../data-source");
const client_entities_1 = require("../../Entities/client.entities");
const getAllClientsServices = () => {
    const clientRepository = data_source_1.AppDataSource.getRepository(client_entities_1.Client);
    const clients = clientRepository.find();
    return clients;
};
exports.default = getAllClientsServices;
