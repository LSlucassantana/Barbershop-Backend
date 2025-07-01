import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Agendamento } from './agendamento.entity';

@Entity()
export class Pagamento {
  @PrimaryGeneratedColumn({ name: 'id_pagamento' })
  idPagamento: number;

  @OneToOne(() => Agendamento, (agendamento) => agendamento.pagamento)
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
