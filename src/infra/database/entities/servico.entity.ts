import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Agendservico } from './agendservico.entity';

@Entity()
export class Servico {
  @PrimaryGeneratedColumn('increment', { name: 'id_servico' })
  idservico: number;

  @Column({ nullable: false })
  nome: string;

  @Column({ nullable: false })
  preco: number;

  @Column({ nullable: false })
  duracao: number;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Agendservico, (agendservico) => agendservico.servico)
  agendservico: Agendservico;
}
