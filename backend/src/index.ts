import express from "express";

import routes from "./Routes/routes";

import cors from "cors"

const app = express();

app.use(express.json());

const port = 3333;

app.use(cors())
app.use(routes);

app.listen(process.env.PORT||port, () => `Server is running ${port}`);