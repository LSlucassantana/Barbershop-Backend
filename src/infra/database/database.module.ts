import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agendamento } from './entities/agendamento.entity';
import { Agendservico } from './entities/agendservico.entity';
import { Barbeiro } from './entities/barbeiro.entity';
import { Cliente } from './entities/cliente.entity';
import { Pagamento } from './entities/pagemento.entity';
import { Servico } from './entities/servico.entity';
import { Example } from './entities/example.entity';
import { ExampleService } from './services/example.service';
import { ClienteService } from './services/cliente.service';
import { BarbeiroService } from './services/barbeiro.service';
import { AgendamentoService } from './services/agendamento.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ep-frosty-frost-af2z9upt-pooler.c-2.us-west-2.aws.neon.tech',
      port: 5432,
      username: 'neondb_owner',
      password: 'npg_ZcSrst15BEXH',
      database: 'neondb',
      entities: [
        Cliente,
        Barbeiro,
        Servico,
        Agendamento,
        Agendservico,
        Pagamento,
        Example,
      ],
      synchronize: true,
      ssl: { rejectUnauthorized: false },
    }),
    TypeOrmModule.forFeature([
      Example,
      Cliente,
      Barbeiro,
      Servico,
      Agendamento,
      Agendservico,
      Pagamento,
    ]),
  ],
  exports: [
    ExampleService,
    ClienteService,
    BarbeiroService,
    AgendamentoService,
  ],
  providers: [
    ExampleService,
    ClienteService,
    BarbeiroService,
    AgendamentoService,
  ],
})
export class DataBaseModule {}
