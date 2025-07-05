import { Module } from '@nestjs/common';
import { ExampleController } from './example/new-example.controller';
import { DataBaseModule } from 'src/infra/database/database.module';

@Module({
  imports: [DataBaseModule],
  controllers: [ExampleController],
  providers: [],
})
export class DomainModule {}
