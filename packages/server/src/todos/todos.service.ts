import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Todo } from './todo.entity';

@Injectable()
export class TodosService {
  constructor(@Inject('TODOS_REPOSITORY') private todosRepository: typeof Todo) {}

  async findAll(): Promise<Todo[]> {
    return this.todosRepository.findAll<Todo>({
      order: ['isCompleted', 'end', 'start'],
    });
  }

  async add(todo: Todo[]): Promise<Todo[]> {
    return this.todosRepository.bulkCreate(todo);
  }

  async update(id: number, todo: Todo): Promise<Todo> {
    const target = await this.todosRepository.findOne({ where: { id } });
    if (target) {
      target.contents = todo.contents;
      target.start = todo.start;
      target.end = todo.end;
      return target.save();
    } else {
      throw new NotFoundException();
    }
  }

  async updatePartial(id: number, todo: Partial<Todo>): Promise<Todo> {
    const target = await this.todosRepository.findOne({ where: { id } });
    if (target) {
      ['contents', 'start', 'end', 'isCompleted'].forEach((prop) => {
        if (prop in todo) {
          target[prop] = todo[prop];
        }
      });
      return target.save();
    } else {
      throw new NotFoundException();
    }
  }

  async delete(id: number) {
    await this.todosRepository.destroy({ where: { id } });
    return;
  }
}
