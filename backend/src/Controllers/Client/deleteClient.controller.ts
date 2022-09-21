import { Request, Response } from "express";
import deleteClientService from "../../Services/Client/deleteClient.service";

const deleteClientController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    const client = await deleteClientService(id);

    return res.status(204).json({ message: "Client deleted" });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(404).send({
        message: err.message,
      });
    }
  }
};

export default deleteClientController;
