import { AppDataSource } from "../../data-source";
import { Client } from "../../Entities/client.entities";

const deleteClientService = async (id: string) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const clients = await clientRepository.find();

  const account = clients.find((client) => client.id === id);

  if (!account) {
    throw new Error("Client not found");
  }

  await clientRepository.delete(account!.id);

  return true;
};

export default deleteClientService;
