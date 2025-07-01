import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Agendamento } from './agendamento.entity';

@Entity()
export class Servico {
  @PrimaryGeneratedColumn({ name: 'id_servico' })
  idservico: number;

  @Column({ nullable: false })
  nome: string;

  @Column({ nullable: false })
  preco: number;

  @Column({ nullable: false })
  duracao: number;

  @Column({ default: true })
  isActive: boolean;

  @ManyToMany(() => Agendamento, (agendamento) => agendamento.servicos)
  agendamentos: Agendamento[];
}
