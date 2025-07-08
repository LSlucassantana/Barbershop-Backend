import { Module } from '@nestjs/common';
import { ExampleController } from './example/new-example.controller';
import { DataBaseModule } from 'src/infra/database/database.module';
import { ClienteController } from './example/dtos/cliente.controller';
import { BarbeiroController } from './example/dtos/barbeiro.controller';
import { AgendamentoController } from './example/dtos/agendamento.controller';

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
