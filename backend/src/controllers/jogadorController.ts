import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Jogador } from '../models/jogador';

export class JogadorController {
  private jogadorRepository = getRepository(Jogador);

  async all(request: Request, response: Response) {
    const jogadores = await this.jogadorRepository.find();
    return response.json(jogadores);
  }

  async save(request: Request, response: Response) {
    const jogador = await this.jogadorRepository.save(request.body);
    return response.json(jogador);
  }
}
