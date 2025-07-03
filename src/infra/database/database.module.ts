import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agendamento } from './entities/agendamento.entity';
import { Agendservico } from './entities/agendservico.entity';
import { Barbeiro } from './entities/barbeiro.entity';
import { Cliente } from './entities/cliente.entity';
import { Pagamento } from './entities/pagemento.entity';
import { Servico } from './entities/servico.entity';

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
      ],
      synchronize: true,
      ssl: { rejectUnauthorized: false },
    }),
  ],
  controllers: [],
  providers: [],
})
export class DataBaseModule {}
