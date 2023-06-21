import { Component } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {

  title: string = '';
  price: number = 0;
  quantity: number = 0;

  onSubmit(){

  }

}
