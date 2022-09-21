import { Request, Response } from "express";
import getAllContactsServices from "../../Services/Contacts/getAllContacts.service";

const getAllContactsController = async (req: Request, res: Response) => {
  const contacts = await getAllContactsServices();

  return res.status(200).send(contacts);
};

export default getAllContactsController;
