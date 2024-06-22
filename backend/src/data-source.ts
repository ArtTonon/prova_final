import "reflect-metadata";
import { DataSource } from "typeorm";
import { Jogador } from "./models/jogador";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "new_password", // use a nova senha aqui
  database: "prova_final",
  synchronize: true,
  logging: false,
  entities: [Jogador],
  migrations: [],
  subscribers: [],
});
