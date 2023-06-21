import { Component, OnInit } from '@angular/core';
import { Item } from '../model/Item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  items: Item[] = [];
  total: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        id: 1,
        title: 'manzana',
        price: 10,
        quantity: 5,
        completed: false,
      },
      {
        id: 2,
        title: 'uvas',
        price: 10.2,
        quantity: 2,
        completed: true,
      },
      {
        id: 3,
        title: 'peras',
        price: 12,
        quantity: 11,
        completed: true,
      },
      {
        id: 4,
        title: 'Mangos',
        price: 5.5,
        quantity: 13,
        completed: false,
      },
    ];

    this.getTotal();
  }

  deleteItem(item: Item) {
    this.items = this.items.filter((x) => x.id !== item.id);
    this.getTotal();
  }

toggleItem(item: Item) {
  this.getTotal();
}
  getTotal(){
    this.total = this.items
                     .filter(item => !item.completed)
                     .map(item => item.quantity * item.price)
                     .reduce((acc, item) => acc += item, 0);
  }
}
