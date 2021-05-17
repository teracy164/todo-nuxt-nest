import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { Todo } from './todo.entity';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private todoService: TodosService) {}

  @Get()
  getTodos(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Post()
  add(@Body() body: Todo): Promise<Todo> {
    return this.todoService.add(body);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: Todo,
  ): Promise<Todo> {
    return this.todoService.update(id, body);
  }

  @Patch(':id')
  updatePartial(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: Todo,
  ): Promise<Todo> {
    return this.todoService.updatePertial(id, body);
  }

  @Delete(':id')
  deleteTodo(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.todoService.delete(id);
  }
}
