import { ICreateContact } from "../../Interfaces/interfaces";
import { AppDataSource } from "../../data-source";
import { Contacts } from "../../Entities/contacts.entities";
import { Client } from "../../Entities/client.entities";

const createContactsService = async ({
  id,
  name,
  email,
  cellphone,
}: ICreateContact) => {
  const contactRepository = AppDataSource.getRepository(Contacts);
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.find();

  const account = client.find((client) => client.id === id);

  const contacts = await contactRepository.find();

  const contactAlreadyExists = contacts.filter(
    (contact) => contact.name === name
  );

  const contactAlreadyExistsInClient = contactAlreadyExists.find(
    (client) => client.client.id === id
  );

  if (!account) {
    throw new Error("Client not found");
  }

  if (contactAlreadyExistsInClient) {
    throw new Error("Contact already exists");
  }

  const newContact = new Contacts();
  (newContact.client = account),
    (newContact.name = name),
    (newContact.email = email),
    (newContact.cellphone = cellphone),
    contactRepository.create(newContact);
  await contactRepository.save(newContact);

  return newContact;
};

export default createContactsService;
