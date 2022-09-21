import { ICreateContact, IUpdateContact } from "../../Interfaces/interfaces";
import { AppDataSource } from "../../data-source";
import { Contacts } from "../../Entities/contacts.entities";
import { Client } from "../../Entities/client.entities";

const updateContactsService = async ({
  id,
  name,
  newName,
  newEmail,
  newCellphone,
}: IUpdateContact) => {
  const contactRepository = AppDataSource.getRepository(Contacts);
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.find();

  const account = client.find((client) => client.id === id);

  const contacts = await contactRepository.find();

  const contactAlreadyExists = contacts.filter(
    (contact) => contact.name === name
  );
  if (!contactAlreadyExists) {
    throw new Error(contactAlreadyExists);
  }
  const contactAlreadyExistsInClient = contactAlreadyExists.find(
    (client) => client.client.id === id
  );

  if (!account) {
    throw new Error("Client not found");
  }

  if (!contactAlreadyExistsInClient) {
    throw new Error("Contact not exists");
  }

  await contactRepository.update(contactAlreadyExistsInClient!.id, {
    name: newName,
    email: newEmail,
    cellphone: newCellphone
  });
  const updateContacts = await contactRepository.find();
  const updatedContact = updateContacts.filter(
    (contact) => contact.name === newName
  );

  return updatedContact;
};

export default updateContactsService;
