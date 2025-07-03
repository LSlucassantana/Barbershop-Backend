import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Agendamento } from './agendamento.entity';
import { Servico } from './servico.entity';

@Entity()
export class Agendservico {
  @PrimaryGeneratedColumn('increment', { name: 'id_agendeservico' })
  idAgendeservico: number;

  @Column({ name: 'id_agendamento' })
  idAgendamento: number;

  @ManyToOne(() => Agendamento, (agendamento) => agendamento.agendservico)
  @JoinColumn({ name: 'id_agendamento' })
  agendamento: Agendamento;

  @Column({ name: 'id_servico' })
  idServico: number;

  @ManyToOne(() => Servico, (servico) => servico.agendservico)
  @JoinColumn({ name: 'id_servico' })
  servico: Servico;
}
