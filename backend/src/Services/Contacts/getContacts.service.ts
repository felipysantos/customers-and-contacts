import { AppDataSource } from "../../data-source";
import { Client } from "../../Entities/client.entities";
import { Contacts } from "../../Entities/contacts.entities";
const getContactsService = async (id: string) => {
  const contactRepository = AppDataSource.getRepository(Contacts);
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.find();

  const account = client.find((client) => client.id === id);

  const contacts = await contactRepository.find();

  const contactAlreadyExists = contacts.filter(
    (contact) => contact.client.id === id
  );

  if (!account) {
    throw new Error("Client not found");
  }


  return contactAlreadyExists;
};

export default getContactsService;