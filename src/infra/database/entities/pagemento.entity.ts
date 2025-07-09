import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Agendamento } from './agendamento.entity';
import { Opcao2 } from 'src/domain/pagamento/dtos/pagamento.dtos';

@Entity()
export class Pagamento {
  @PrimaryGeneratedColumn('uuid', { name: 'id_pagamento' })
  idPagamento: string;

  @Column({ type: 'int', name: 'id_agendamento' })
  idAgendamento: number;

  @ManyToOne(() => Agendamento, (agendamento) => agendamento.pagamento)
  @JoinColumn({ name: 'id_agendamento' })
  agendamento: Agendamento;

  @Column({ type: 'decimal', precision: 6, scale: 2, nullable: false })
  valor: number;

  @Column({ type: 'simple-enum', enum: Opcao2 })
  formaPagmento: Opcao2;

  @Column({ type: 'timestamp', nullable: false })
  dataPagemento: Date;

  @Column({ nullable: true })
  observacao: string;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;
}
