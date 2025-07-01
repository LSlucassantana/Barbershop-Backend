import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Agendamento } from './agendamento.entity';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn('uuid', { name: 'id_cliente' })
  idCliente: string;

  @Column({ nullable: false })
  nome: string;

  @Column({ nullable: false, name: 'data_nasc' })
  dataNasc: Date;

  @Column({ nullable: false })
  telefone: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  senha: string;

  @Column({ nullable: false })
  cpf: string;

  @OneToMany(() => Agendamento, (agendamento) => agendamento.cliente)
  agendamentos: Agendamento[];

  @Column({ default: true })
  isActive: boolean;
}
