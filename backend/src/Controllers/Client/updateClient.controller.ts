import { Request, Response } from "express";

import updateClientService from "../../Services/Client/updateClient.service";

const updateClientController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const { name, email, cellphone } = req.body;

    if (!id) {
      throw new Error("ID not found");
    }

    const client = await updateClientService({
      id,
      name,
      email,
      cellphone,
    });

    return res.status(201).json({ message: "Client updated", client: client });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(404).send({
        message: err.message,
      });
    }
  }
};

export default updateClientController;
