import {Component} from '@angular/core';

interface User {
  name: string;
  age: number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  message: string;
  numbers: number[];
  isOK: boolean;
  users: User[];
  items: string[];
  display: string;

  constructor() {
    console.log('constructor of AppComponent started');

    this.title = 'demo';
    this.message = 'message 1';
    this.numbers = [11, 22, 33, 44];
    this.isOK = true;
    this.users = [
      {
        name: 'User 1',
        age: 20
      },
      {
        name: 'User 2',
        age: 19
      },
      {
        name: 'User 3',
        age: 21
      },
    ];
    this.items = [];
    this.display = '';
  }


  toggleMessage() {
    // console.log('btn was clicked');
    // if(this.isOK)
    //     this.isOK = false;
    // else
    //     this.isOK = true;
    this.isOK = !this.isOK;
  }

  addItem(){
    if (this.display !== ''){
      this.items.push(this.display);
      this.display = '';
    } else {
      alert('Enter the task description');
    }
  }

  removeItem(index: number){
    this.items.splice(index, 1);
  }


}
