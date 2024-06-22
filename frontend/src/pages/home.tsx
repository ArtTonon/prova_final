import React, { useEffect, useState } from 'react';
import jogadorService from '../services/JogadorService';
import JogadorCard from '../components/jogadorCard';

interface Jogador {
  id: string;
  nome: string;
  posicao: string;
  imagem: string;
  idade: number;
}

const Home: React.FC = () => {
  const [jogadores, setJogadores] = useState<Jogador[]>([]);

  useEffect(() => {
    jogadorService.get('/jogadores').then(response => {
      setJogadores(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Jogadores</h1>
      <div className="jogadores-grid">
        {jogadores.map(jogador => (
          <JogadorCard key={jogador.id} {...jogador} />
        ))}
      </div>
    </div>
  );
};

export default Home;
