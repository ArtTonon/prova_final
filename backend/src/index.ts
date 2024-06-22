import express from "express";
import { AppDataSource } from "./data-source";
import { Jogador } from "./models/jogador";

const app = express();
const PORT = 38000;

app.use(express.json());

// Conectar ao banco de dados
AppDataSource.initialize().then(() => {
  console.log("Data Source has been initialized!");

  // Rota para pegar todos os jogadores
  app.get("/jogadores", async (req, res) => {
    const jogadores = await AppDataSource.getRepository(Jogador).find();
    res.json(jogadores);
  });

  // Rota para inserir um jogador
  app.post("/jogadores", async (req, res) => {
    const jogador = AppDataSource.getRepository(Jogador).create(req.body);
    const result = await AppDataSource.getRepository(Jogador).save(jogador);
    res.json(result);
  });

  // Iniciar o servidor
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((err) => {
  console.error("Error during Data Source initialization", err);
});
