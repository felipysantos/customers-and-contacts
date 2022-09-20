import express from "express";

import routes from "./Routes/routes";

const app = express();

app.use(express.json());

const port = 3333;

app.use(routes);

app.listen(port, () => `Server is running ${port}`);
