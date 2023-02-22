export class Task {
  static currentId: number = 1;
  id: number;
  title: string;
  isDone: boolean;

  constructor(title: string) {
    this.id = Task.currentId++;
    this.title = title;
    this.isDone = false;
  }
}
