import { Request, Response } from "express";

import updateContactsService from "../../Services/Contacts/updateContact.service";

const updateContactController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const { name, newName, newEmail, newCellphone } = req.body;

    if (!id) {
      throw new Error("ID not found");
    }

    const client = await updateContactsService({
      id,
      name,
      newName,
      newEmail,
      newCellphone,
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

export default updateContactController;
