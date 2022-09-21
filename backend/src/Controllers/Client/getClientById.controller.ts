import { Request, Response } from "express";
import getClientByIdServiceService from "../../Services/Client/getClientById.service";

const getClientByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    const client = await getClientByIdServiceService(id);

    return res.status(200).send(client);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(404).send({
        message: err.message,
      });
    }
  }
};

export default getClientByIdController;