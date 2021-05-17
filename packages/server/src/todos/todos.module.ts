import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { todosProviders } from './todos.provider';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [TodosController],
  providers: [TodosService, ...todosProviders],
})
export class TodosModule {}
