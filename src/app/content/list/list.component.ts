import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  Tasks: Array<Todo>;
  Task: Todo;
  numTask: Number;

  constructor(private todo: TodoService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.todo.getList().subscribe(res => {
      this.Tasks = res;
      this.numTask = this.Tasks.length;
    });
  }

  updateStatus(Task: Todo) {
    this.todo.edit(Task).subscribe(res => {
      this.Tasks = res;
    });
  }

  deleteTask(Task: Todo) {
    this.todo.delete(Task).subscribe(res => {
      this.Tasks = res;
      this.numTask = this.Tasks.length;
    });
  }

  receiveTasks($event) {
    this.Tasks = $event;
    this.numTask = this.Tasks.length;
  }

}
