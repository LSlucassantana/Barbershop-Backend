import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Barbeiro } from './barbeiro.entity';
import { Cliente } from './cliente.entity';

import { Agendservico } from './agendservico.entity';
import { Pagamento } from './pagemento.entity';
import { Opcao } from 'src/domain/agendamento/dtos/agendamento.dto';

@Entity()
export class Agendamento {
  @PrimaryGeneratedColumn('increment', { name: 'id_agendamento' })
  idAgendamento: number;

  @Column({ name: 'id_cliente' })
  idCliente: string;

  @ManyToOne(() => Cliente, (cliente) => cliente.agendamentos)
  @JoinColumn({ name: 'id_cliente' })
  cliente: Cliente;

  @Column({ name: 'id_barbeiro' })
  idBarbeiro: number;

  @ManyToOne(() => Barbeiro, (barbeiro) => barbeiro.agendamentos)
  @JoinColumn({ name: 'id_barbeiro' })
  barbeiro: Barbeiro;

  @Column({ nullable: false })
  data: Date;

  @Column({ nullable: false })
  hora: string;

  @Column({ nullable: true })
  observacao: string;

  @Column({ type: 'simple-enum', enum: Opcao, default: Opcao.agendado })
  status: Opcao;

  @OneToOne(() => Pagamento, (pagamento) => pagamento.agendamento)
  pagamento: Pagamento;

  @OneToMany(() => Agendservico, (agendservico) => agendservico.agendamento)
  agendservico: Agendservico;
}
