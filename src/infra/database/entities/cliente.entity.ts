import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Agendamento } from './agendamento.entity';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn('uuid', { name: 'id_cliente' })
  idCliente: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nome: string;

  @Column({ type: 'date', nullable: false, name: 'data_nasc' })
  dataNasc: Date;

  @Column({ type: 'varchar', length: 15, nullable: false })
  telefone: string;

  @Column({ type: 'varchar', unique: true, nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  senha: string;

  @Column({ type: 'varchar', length: 11, unique: true, nullable: false })
  cpf: string;

  @OneToMany(() => Agendamento, (agendamento) => agendamento.cliente)
  agendamentos: Agendamento[];

  @Column({ default: true })
  isActive: boolean;
}
