import { AppDataSource } from "../../data-source";
import { Client } from "../../Entities/client.entities";

const getClientByIdService = async (id: string) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const clients = await clientRepository.find();

  const account = clients.find((client) => client.id === id);

  if(!account){
    throw new Error("Client not found")
  }

  return account;
};

export default getClientByIdService;