import React from 'react';

interface JogadorCardProps {
  id: string;
  nome: string;
  posicao: string;
  imagem: string;
  idade: number;
}

const JogadorCard: React.FC<JogadorCardProps> = ({ id, nome, posicao, imagem, idade }) => {
  return (
    <div className="card">
      <img src={imagem} alt={nome} />
      <h2>{nome}</h2>
      <p>Posição: {posicao}</p>
      <p>Idade: {idade}</p>
    </div>
  );
};

export default JogadorCard;
