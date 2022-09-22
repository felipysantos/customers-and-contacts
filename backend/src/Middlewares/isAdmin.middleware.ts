import { AppDataSource } from "../data-source";
import { Client } from "../Entities/client.entities";
import { Request, Response, NextFunction } from "express";

const verifyAdminAvailability = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  const clientRepository = AppDataSource.getRepository(Client);

  const clients = await clientRepository.find();

  const account = clients.find((client) => client.id === id);

  if (!account) {
    return res.status(404).json({message:"Client not found"});
  }

  if (account && !account.isAdmin) {
    return res.status(401).json({message:"Admins only"});
  }
  next();
};
export default verifyAdminAvailability;
