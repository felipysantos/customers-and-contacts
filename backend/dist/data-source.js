"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
require("dotenv").config();
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    synchronize: false,
    logging: true,
    entities: ["src/Entities/*.ts"],
    migrations: ["src/migrations/*.ts"],
});
exports.AppDataSource.initialize()
    .then(() => {
    console.log("Data Source initialized");
})
    .catch((err) => {
    console.error("Error during Data Source initialization", err);
});
