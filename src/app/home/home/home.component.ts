import { Component, OnInit } from '@angular/core';
import { Item } from './items';
import { MethodService } from './method.service';

const emptyItem: Item = {
  id: '',
  name: '',
  period: '',
  enrolled: false
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  scheduledItem = emptyItem;
  items = []

  constructor(private itemService: MethodService) { }

  ngOnInit(): void {
    this.fetchItems();
  }

  fetchItems() {
    this.itemService.all().subscribe((result:any) => this.items = result);
  }

  saveItem(item) {
    this.itemService.create(item).subscribe(result => this.fetchItems());
  }

  deleteItem(itemId) {
    this.itemService.delete(itemId).subscribe(result => this.fetchItems());

  }

}
