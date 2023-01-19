import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InMemoryOperationsModule } from './ports/in-memory/in-memory-operations.module';

@Module({
  imports: [InMemoryOperationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
