import { Router } from "express";

const routes = Router();

import createClientController from "../Controllers/Client/createClient.controller";
import getAllClientsController from "../Controllers/Client/getAllClients.controller";
import getClientByIdController from "../Controllers/Client/getClientById.controller";
import updateClientController from "../Controllers/Client/updateClient.controller";
import deletClientController from "../Controllers/Client/deleteClient.controller";
import getContactsController from "../Controllers/Contacts/getContacts.controller";
import createContactsController from "../Controllers/Contacts/createContacts.controller";
import updateContactController from "../Controllers/Contacts/updateContact.controller";
import deleteContactController from "../Controllers/Contacts/deleteContact.controller";
import loginClientController from "../Controllers/Client/loginClient.controller";
import verifyAuthToken from "../Middlewares/authToken.middleware";
import verifyAdminAvailability from "../Middlewares/isAdmin.middleware";

routes.get(
  "/client/:id",
  verifyAuthToken,
  verifyAdminAvailability,
  getAllClientsController
);
routes.get("/client/:id", verifyAuthToken, getClientByIdController);
routes.post("/client", createClientController);
routes.patch("/client/:id", updateClientController);
routes.delete("/client/:id", deletClientController);

routes.post("/client/login", loginClientController);

routes.get("/client/:id/contact", verifyAuthToken, getContactsController);
routes.post("/client/:id/contact", verifyAuthToken, createContactsController);
routes.patch("/client/:id/contact", verifyAuthToken, updateContactController);
routes.delete("/client/:id/contact", verifyAuthToken, deleteContactController);

export default routes;
