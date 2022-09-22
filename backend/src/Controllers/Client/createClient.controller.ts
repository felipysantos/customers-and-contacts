import { Request, Response } from "express";
import createClientService from "../../Services/Client/createClient.service";

const createClientController = async (req: Request, res: Response) => {
  try {
    const { name, email, cellphone, password, isAdmin } = req.body;
    const newClient = await createClientService({
      name,
      email,
      cellphone,
      password,
      isAdmin,
    });
    return res.status(201).json(newClient);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({
        message: err.message,
      });
    }
  }
};

export default createClientController;
