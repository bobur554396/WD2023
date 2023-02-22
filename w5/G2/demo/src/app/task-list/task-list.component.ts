import { Component, OnInit } from '@angular/core';
import {Task} from "../models";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  newTasks: Task[];
  currentTask: Task;

  constructor() {
    this.newTasks = [
      new Task('task 1'),
      new Task('task 2'),
      new Task('task 3'),
    ];
    this.currentTask = new Task('');
  }

  ngOnInit(): void {
  }

  addTask() {
    if(this.currentTask.title !== ''){
      // this.currentTask.id = this.newTasks.length + 1;
      this.newTasks.push(this.currentTask);
      this.currentTask = new Task('');
    } else {
      alert('Enter the title of task');
    }
  }

  onNewTaskRemove(index: number){
    this.newTasks = this.newTasks.filter((x) => x.id !== index);
  }

  isDoneChanged(task: Task){
    console.log(task);
  }

}
