import { AppDataSource } from "../../data-source";
import { Contacts } from "../../Entities/contacts.entities";

const getAllContactsServices = () => {
  const contactRepository = AppDataSource.getRepository(Contacts);

  const contacts = contactRepository.find();

  return contacts;
};

export default getAllContactsServices;
