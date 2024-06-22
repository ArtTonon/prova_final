import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Jogador {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  nome!: string;

  @Column()
  posicao!: string;

  @Column()
  imagem!: string;

  @Column()
  idade!: number;
}
