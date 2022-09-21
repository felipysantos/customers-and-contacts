import { Request, Response } from "express";
import createContactsService from "../../Services/Contacts/createContact.service";

const createContactsController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email, cellphone } = req.body;
    const newContact = await createContactsService({id, name, email, cellphone });
    return res.status(201).json(newContact);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({
        message: err.message,
      });
    }
  }
};

export default createContactsController;
