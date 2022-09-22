import { DataSource } from "typeorm";
require("dotenv").config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  synchronize: false,
  logging: true,
  entities: ["src/Entities/*.ts"],
  migrations: ["src/Migrations/*.ts"],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source initialized");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });