import { AppDataSource } from "../../data-source";
import { Client } from "../../Entities/client.entities";

import { IUpdateClient } from "../../Interfaces/interfaces";

const updateClientService = async ({
  id,
  name,
  email,
  cellphone,
}: IUpdateClient) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const date = new Date();

  const clients = await clientRepository.find();

  const account = clients.find((client) => client.id === id);

  await clientRepository.update(account!.id, {
    name: name,
    email: email,
    cellphone: cellphone,
    updated_at: date,
  });

  const updatedClient = clients.find((client) => client.id === id);

  return updatedClient;
};

export default updateClientService;
