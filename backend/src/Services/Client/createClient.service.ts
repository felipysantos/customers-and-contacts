import { ICreateClient } from "../../Interfaces/interfaces";
import { AppDataSource } from "../../data-source";
import { Client } from "../../Entities/client.entities";

const createClientService = async ({
  name,
  email,
  cellphone,
}: ICreateClient) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const date = new Date();

  const users = await clientRepository.find();

  const emailAlreadyExists = users.find((user) => user.email === email);

  if (emailAlreadyExists) {
    throw new Error("Email already exists");
  }

  const newClient = new Client();
  (newClient.name = name),
    (newClient.email = email),
    (newClient.cellphone = cellphone),
    (newClient.created_at = date),
    clientRepository.create(newClient);
  await clientRepository.save(newClient);

  return newClient;
};

export default createClientService;
