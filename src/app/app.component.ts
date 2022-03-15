import { Component } from '@angular/core';
enum Difficulty {
  Easy = 'Easy',
  Medium = 'Medium',
  Hard = 'Hard',
}
enum State {
  Todo = 'Todo',
  InProgress = 'InProgress',
  Done = 'Done',
}
export interface Item {
  id: number;
  name: string;
  state: State;
  difficulty: Difficulty;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  startingId: number = 0;
  taskName: string = '';
  taskDifficulty: Difficulty | string = '';
  todoItems: Item[] = [
  ];
  inProgressItems: Item[] = [
  ];

  doneItems: Item[] = [
  ];

  addNewItem() {
    if (this.taskName && this.taskDifficulty) {
      this.todoItems.push({
        id: ++this.startingId,
        name: this.taskName,
        state: State.Todo,
        difficulty: this.taskDifficulty as Difficulty,
      });
      this.taskName = '';
      this.taskDifficulty = '';
    } else {
      alert('ველები 3 წელია სიცარიელეში არიან - სოსო');
    }
  }
  deleteItem(itemsArray: string, id: number) {
    if (itemsArray === 'todoItems') {
      this.todoItems = this.todoItems.filter((item) => item.id != id);
    }
    if (itemsArray === 'inProgressItems') {
      this.inProgressItems = this.inProgressItems.filter((item) => item.id != id);
    }
    if (itemsArray === 'doneItems') {
      this.doneItems = this.doneItems.filter((item) => item.id != id);
    }
  }
  moveForward(item: Item) {
    
    if (item.state === State.Todo) {
      this.todoItems = this.todoItems.filter((element) => element.id != item.id);
      this.inProgressItems.push({...item, state: State.InProgress});
    }
    if (item.state === State.InProgress) {
      this.inProgressItems = this.inProgressItems.filter((element) => element.id != item.id);
      this.doneItems.push({...item, state: State.Done});
    }
  }
  moveBackward(item: Item) {
    if (item.state === State.InProgress) {
      this.inProgressItems = this.inProgressItems.filter((element) => element.id != item.id);
      this.todoItems.push({...item, state: State.Todo});
    }
    if (item.state === State.Done) {
      this.doneItems = this.doneItems.filter((element) => element.id != item.id);
      this.inProgressItems.push({ ...item, state: State.InProgress });
      
    }
    
  }
}
