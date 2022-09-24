import { ICreateClient } from "../../Interfaces/interfaces";
import { AppDataSource } from "../../data-source";
import { Client } from "../../Entities/client.entities";
import * as bcrypt from "bcryptjs";

const createClientService = async ({
  name,
  email,
  cellphone,
  password,
  isAdmin,
}: ICreateClient) => {
  const clientRepository = AppDataSource.getRepository(Client);
  const hashedPassword = await bcrypt.hash(password, 10);

  const date = new Date();

  const users = await clientRepository.find();

  const emailAlreadyExists = users.find((user) => user.email === email);

  if (emailAlreadyExists) {
    throw new Error("Email already exists");
  }

  const newClient = new Client();
  (newClient.name = name),
    (newClient.email = email),
    (newClient.password = hashedPassword),
    (newClient.cellphone = cellphone),
    (newClient.isAdmin = isAdmin),
    (newClient.created_at = date),
    (newClient.updated_at = date),
    clientRepository.create(newClient);
  await clientRepository.save(newClient);
  
  const returnClient = {
    id: newClient.id,
    name: newClient.name,
    email: newClient.email
  }
  
  return returnClient;
};

export default createClientService;
