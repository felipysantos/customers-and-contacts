import { AppDataSource } from "../../data-source";
import { Client } from "../../Entities/client.entities";

const getAllClientsServices = () => {
  const clientRepository = AppDataSource.getRepository(Client);

  const clients = clientRepository.find();

  return clients;
};

export default getAllClientsServices;
