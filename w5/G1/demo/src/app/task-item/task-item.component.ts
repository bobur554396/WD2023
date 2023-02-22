import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {Task} from "../models";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() remove = new EventEmitter();

  constructor() {
    this.task = new Task('');
  }

  ngOnInit(): void {
  }

  removeTask(){
    this.remove.emit(this.task.id);
  }

  isDoneChanged(){
    // console.log(this.task);
  }

}
