import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from '../../services/todo.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  Task: Todo;
  Tasks: Array<Todo>;
  taskId: string;
  isButtonDisabled: boolean;
  constructor(private todo: TodoService, private route: ActivatedRoute) {
    this.taskId = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.getTask();
  }

  updateTask(Task) {
    this.todo.edit(Task).subscribe(res => {
      this.Tasks = res;
    });
  }

  getTask() {
    this.todo.view(this.taskId).subscribe(res => {
      this.Task = res;
    });
  }

}
