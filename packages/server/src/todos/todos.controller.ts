import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Todo } from './todo.entity';
import { TodosService } from './todos.service';

@Controller('todos')
@ApiTags('todo')
export class TodosController {
  constructor(private todoService: TodosService) {}

  @Get()
  @ApiOperation({ summary: 'TODO一覧取得', operationId: 'getTodos' })
  @ApiResponse({ status: 200, type: Todo, isArray: true })
  getAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'TODO追加', operationId: 'addTodo' })
  @ApiBody({ type: Todo, isArray: true })
  @ApiResponse({ status: 201, type: Todo, isArray: true })
  add(@Body() body: Todo[]): Promise<Todo[]> {
    return this.todoService.add(body);
  }

  @Put(':id')
  @ApiOperation({ summary: 'TODO更新', operationId: 'updateTodo' })
  @ApiResponse({ status: 200, type: Todo })
  update(@Param('id', ParseIntPipe) id: number, @Body() body: Todo): Promise<Todo> {
    return this.todoService.update(id, body);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'TODO部分更新', operationId: 'updateTodoPartial' })
  @ApiResponse({ status: 200, type: Todo })
  updatePartial(@Param('id', ParseIntPipe) id: number, @Body() body: Todo): Promise<Todo> {
    return this.todoService.updatePartial(id, body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'TODO削除', operationId: 'deleteTodo' })
  @ApiResponse({ status: 204 })
  delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.todoService.delete(id);
  }
}
