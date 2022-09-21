import { AppDataSource } from "../../data-source";
import { Client } from "../../Entities/client.entities";
import { Contacts } from "../../Entities/contacts.entities";

const deleteContactService = async (id: string, name: string) => {
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

  if (!contactAlreadyExistsInClient) {
    throw new Error("Contact not exists");
  }

  await contactRepository.delete(contactAlreadyExistsInClient!.id);

  return true;
};

export default deleteContactService;
