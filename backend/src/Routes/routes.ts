import { Router } from "express";

const routes = Router();

import createClientController from "../Controllers/Client/createClient.controller";
import getAllClientsController from "../Controllers/Client/getAllClients.controller";

routes.post("/client", createClientController);
routes.get("/client",  getAllClientsController);

export default routes;