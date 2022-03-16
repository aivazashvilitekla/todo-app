import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Difficulty, Item } from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() item!: Item;
  @Output() delete: EventEmitter<Item> = new EventEmitter();
  @Output() moveForward: EventEmitter<Item> = new EventEmitter();
  @Output() moveBackward: EventEmitter<Item> = new EventEmitter();

  deleteItemHandler(item: Item) {
    this.delete.emit(item);
  }
  moveForwardHandler(item: Item) {
    this.moveForward.emit(item);
  }
  moveBackwardHandler(item: Item) {
    this.moveBackward.emit(item);
  }
  getDifficultyClassList(difficulty: Difficulty) {
    return {
      'info__difficulty--easy': difficulty === Difficulty.Easy,
      'info__difficulty--medium': difficulty === Difficulty.Medium,
      'info__difficulty--hard': difficulty === Difficulty.Hard,
    };
  }
  constructor() {}

  ngOnInit(): void {}
}
