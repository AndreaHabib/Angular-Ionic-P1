import { Component, OnInit } from '@angular/core';
import { Item } from './items.interface';
import { ItemsService } from './items.service';
import { CartService } from './cart/cart.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  items: Item[];

  constructor(
    private itemsService: ItemsService,
    private CartService: CartService
  ) {
    this.items = this.itemsService.getAllItems();
  }

  ngOnInit() {}

  onAddToCart(item: Item) {
    this.CartService.addToCart(item);
  }

  onSearch($event) {
    this.items = this.itemsService.getAllItems();
    this.items = this.items.filter((item) => {
      return item.title
        .toLowerCase()
        .includes($event.target.value.toLowerCase());
    });
  }
}
