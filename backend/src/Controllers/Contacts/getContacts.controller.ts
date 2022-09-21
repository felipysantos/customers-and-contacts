import { Request, Response } from "express";
import getContactsService from "../../Services/Contacts/getContacts.service";

const getContactsController = async (req: Request, res: Response) => {
  try {
    
    const { id } = req.params;
    const client = await getContactsService(id);

    return res.status(200).send(client);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        
        message: err.message,
      });
    }
  }
};

export default getContactsController;