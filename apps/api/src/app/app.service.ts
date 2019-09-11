import { Injectable } from '@nestjs/common';
import { Todo } from '@pup-mono/data';

@Injectable()
export class AppService {
  todos: Todo[] = [{ title: 'Todo' }, { title: 'Todo 2' }];

  getData(): Todo[] {
    return this.todos;
  }

  addTodo() {
    this.todos.push({
      title: `New todo ${Math.floor(Math.random() * 1000)}`
    });
  }
}
