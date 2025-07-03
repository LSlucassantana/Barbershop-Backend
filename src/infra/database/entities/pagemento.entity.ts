import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Agendamento } from './agendamento.entity';

@Entity()
export class Pagamento {
  @PrimaryGeneratedColumn('uuid', { name: 'id_pagamento' })
  idPagamento: string;

  @PrimaryGeneratedColumn({ name: 'id_agendamento' })
  idAgendamento: number;

  @ManyToOne(() => Agendamento, (agendamento) => agendamento.pagamento)
  @JoinColumn({ name: 'id_agendamento' })
  agendamento: Agendamento;

  @Column({ nullable: false })
  valor: number;

  @Column({ nullable: false })
  formaPagamento: string;

  @Column({ nullable: false })
  dataPagemento: Date;

  @Column({ default: true })
  isActive: boolean;
}
