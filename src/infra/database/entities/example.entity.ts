import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Example {
  @PrimaryGeneratedColumn('uuid', { name: 'id_example' })
  idCliente: string;

  @Column({ nullable: false })
  nome: string;
}
