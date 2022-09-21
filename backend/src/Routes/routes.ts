import { Router } from "express";

const routes = Router();

import createClientController from "../Controllers/Client/createClient.controller";
import getAllClientsController from "../Controllers/Client/getAllClients.controller";
import getClientByIdController from "../Controllers/Client/getClientById.controller";
import updateClientController from "../Controllers/Client/updateClient.controller"
import deletClientController from "../Controllers/Client/deleteClient.controller"
import getContactsController from "../Controllers/Contacts/getContacts.controller";
import createContactsController from "../Controllers/Contacts/createContacts.controller";
import updateContactController from "../Controllers/Contacts/updateContact.controller";
import deleteContactController from "../Controllers/Contacts/deleteContact.controller";

routes.post("/client", createClientController);
routes.get("/client",  getAllClientsController);
routes.get("/client/:id",  getClientByIdController);
routes.patch("/client/:id",  updateClientController);
routes.delete("/client/:id",  deletClientController);

routes.get("/client/:id/contact", getContactsController)
routes.post("/client/:id/contact", createContactsController)
routes.patch("/client/:id/contact",  updateContactController);
routes.delete("/client/:id/contact",  deleteContactController);


export default routes;