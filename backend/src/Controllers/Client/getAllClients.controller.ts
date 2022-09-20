import getAllClientsServices from "../../Services/Client/getAllClients.services";
import { Request, Response } from "express";

const getAllClientsController = async (req: Request, res: Response) => {
  const clients = await getAllClientsServices();
  return res.status(200).send(clients);
};

export default getAllClientsController;
