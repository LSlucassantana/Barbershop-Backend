import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DomainModule } from './domain/domain.module';
import { InfraModule } from './infra/infra.module';

@Module({
  imports: [DomainModule, InfraModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
