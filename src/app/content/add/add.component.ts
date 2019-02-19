import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  Task: Todo;
  isButtonDisabled: boolean;

  @Output() TasksEvent = new EventEmitter<Array<Todo>>();

  constructor(private todo: TodoService) { }

  ngOnInit() {
    this.clearTask();
    this.onKey();
  }

  onKey() {
    this.isButtonDisabled = this.Task.text !== '' ? false : true;
  }

  addTask() {
    if (this.Task.text !== '') {
      this.todo.add(this.Task).subscribe(res => {
        this.clearTask();
        this.TasksEvent.emit(res);
        this.isButtonDisabled = true;
      });
    } else {
      alert('This field is required!');
    }
  }

  clearTask() {
    this.Task = {
      _id: '',
      text: '',
      isDone: false,
      __v: 0
    };
  }

}
