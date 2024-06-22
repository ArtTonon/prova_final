import React, { useState } from 'react';
import jogadorService from '../services/JogadorService';

const EscalarJogador: React.FC = () => {
  const [nome, setNome] = useState('');
  const [posicao, setPosicao] = useState('');
  const [imagem, setImagem] = useState('');
  const [idade, setIdade] = useState(0);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const novoJogador = { nome, posicao, imagem, idade };
    await jogadorService.post('/jogadores', novoJogador);
    setNome('');
    setPosicao('');
    setImagem('');
    setIdade(0);
  };

  return (
    <div>
      <h1>Escalar Jogador</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
        </div>
        <div>
          <label>Posição:</label>
          <input type="text" value={posicao} onChange={e => setPosicao(e.target.value)} />
        </div>
        <div>
          <label>Imagem:</label>
          <input type="text" value={imagem} onChange={e => setImagem(e.target.value)} />
        </div>
        <div>
          <label>Idade:</label>
          <input type="number" value={idade} onChange={e => setIdade(Number(e.target.value))} />
        </div>
        <button type="submit">Escalar</button>
      </form>
    </div>
  );
};

export default EscalarJogador;
