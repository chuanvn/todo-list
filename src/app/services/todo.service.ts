import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  urlListTask: string;
  urlTask: string;
  constructor(public http: HttpClient) {
    this.urlListTask = 'http://node-todos.herokuapp.com/api/todos';
    this.urlTask = 'http://node-todos.herokuapp.com/api/todo';
  }

  getList() {
    return this.http.get<Array<Todo>>(this.urlListTask);
  }

  add(data: Todo) {
    return this.http.post<Array<Todo>>(this.urlTask, data);
  }

  edit(data: Todo) {
    return this.http.put<Array<Todo>>(this.urlTask, data);
  }

  delete(data: Todo) {
    const url = `${this.urlTask}/${data._id}`;
    return this.http.delete<Array<Todo>>(url);
  }
}
