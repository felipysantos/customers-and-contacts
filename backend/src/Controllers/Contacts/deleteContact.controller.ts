import { Request, Response } from "express";
import deleteContactService from "../../Services/Contacts/deleteContact.service";

const deleteContactController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const client = await deleteContactService(id, name);

    return res.status(204).json({ message: "Contact deleted" });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(404).send({
        message: err.message,
      });
    }
  }
};

export default deleteContactController;
