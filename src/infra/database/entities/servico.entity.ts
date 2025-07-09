import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Agendservico } from './agendservico.entity';

@Entity()
export class Servico {
  @PrimaryGeneratedColumn('increment', { name: 'id_servico' })
  idservico: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nome: string;

  @Column({ type: 'decimal', precision: 6, scale: 2, nullable: false })
  preco: number;

  @Column({ type: 'int', nullable: false })
  duracao: number;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @OneToMany(() => Agendservico, (agendservico) => agendservico.servico)
  agendservico: Agendservico;
}
