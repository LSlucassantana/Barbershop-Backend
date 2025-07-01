import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Cliente } from './cliente.entity';
import { Barbeiro } from './barbeiro.entity';
import { Servico } from './servico.entity';
import { Pagamento } from './pagamento.entity';
import { Opcao } from './opcao.enum';

@Entity()
export class Agendamento {
  @PrimaryGeneratedColumn({ name: 'id_agendamento' })
  idAgendamento: number;

  @ManyToOne(() => Cliente, (cliente) => cliente.agendamentos)
  @JoinColumn({ name: 'id_cliente' })
  cliente: Cliente;

  @ManyToOne(() => Barbeiro, (barbeiro) => barbeiro.agendamentos)
  @JoinColumn({ name: 'id_barbeiro' })
  barbeiro: Barbeiro;

  @Column({ nullable: false })
  data: Date;

  @Column({ nullable: false })
  hora: string;

  @Column({ nullable: true })
  observacao: string;

  @Column({ type: 'enum', enum: Opcao, default: Opcao.Agendado })
  status: Opcao;

  @ManyToMany(() => Servico, (servico) => servico.agendamentos)
  @JoinTable({
    name: 'agendamento_servico',
    joinColumn: {
      name: 'id_agendamento',
      referencedColumnName: 'idAgendamento',
    },
    inverseJoinColumn: {
      name: 'id_servico',
      referencedColumnName: 'idServico',
    },
  })
  servicos: Servico[];

  @OneToOne(() => Pagamento, (pagamento) => pagamento.agendamento)
  pagamento: Pagamento;

  @Column({ default: false })
  isAdmin: boolean;

  @Column({ default: true })
  isActive: boolean;
}
