import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Agendamento } from './agendamento.entity';

@Entity()
export class Barbeiro {
  @PrimaryGeneratedColumn({ name: 'id_barbeiro' })
  idBarbeiro: number;

  @Column({ nullable: false })
  nome: string;

  @Column({ nullable: false })
  telefone: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  senha: string;

  @Column({ nullable: false })
  cpf: string;

  @Column({ default: false })
  isAdmin: boolean;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Agendamento, (agendamento) => agendamento.barbeiro)
  agendamentos: Agendamento[];
}
