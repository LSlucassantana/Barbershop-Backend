import { Module } from '@nestjs/common';
import { DataBaseModule } from 'src/infra/database/database.module';
import { AgendamentoController } from './agendamento/agendamento.controller';
import { BarbeiroController } from './barbeiro/barbeiro.controller';
import { ClienteController } from './cliente/cliente.controller';
import { ExampleController } from './example/new-example.controller';

@Module({
  imports: [DataBaseModule],
  controllers: [
    ExampleController,
    ClienteController,
    BarbeiroController,
    AgendamentoController,
  ],
  providers: [],
})
export class DomainModule {}
