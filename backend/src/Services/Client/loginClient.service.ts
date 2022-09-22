import { ILoginClient } from "../../Interfaces/interfaces";
import { AppDataSource } from "../../data-source";
import { Client } from "../../Entities/client.entities";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

const loginClientService = async ({ email, password }: ILoginClient) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const clients = await clientRepository.find();

  const clientSearch = clients.find((user) => user.email === email);

  if (!clientSearch) {
    throw new Error("Email or password incorrect");
  }

  const comparePassword = await bcrypt.compare(password, clientSearch.password);

  if (!comparePassword) {
    throw new Error("Email or password incorrect");
  }

  const token = jwt.sign(
    { id: clientSearch.id, name: clientSearch.name },
    "SECRET_KEY",
    {
      expiresIn: "24h",
    }
  );

  return token;
};

export default loginClientService;
