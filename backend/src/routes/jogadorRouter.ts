import { Router } from "express";
import { AppDataSource } from "../data-source";
import { Jogador } from "../models/jogador";

const router = Router();

router.get("/jogadores", async (req, res) => {
  const jogadores = await AppDataSource.getRepository(Jogador).find();
  res.json(jogadores);
});

router.post("/jogadores", async (req, res) => {
  const jogador = new Jogador();
  jogador.nome = req.body.nome;
  jogador.posicao = req.body.posicao;
  jogador.imagem = req.body.imagem;
  jogador.idade = req.body.idade;

  const savedJogador = await AppDataSource.getRepository(Jogador).save(jogador);
  res.status(201).json(savedJogador);
});

export default router;
