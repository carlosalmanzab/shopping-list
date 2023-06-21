import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../model/Item';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {

  @Input() item: Item = new Item(); //envento
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter(); //evento
  @Output() toggleItem: EventEmitter<Item> = new EventEmitter(); //evento


  constructor() {}

  onDelete(item: Item) {
    this.deleteItem.emit(item);
  };

  onToggle(item: Item) {
    item.completed  = !item.completed;
    this.toggleItem.emit(item);
  }
}
