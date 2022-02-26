import { Injectable } from '@angular/core';
import { CartItems } from './cart.interface';
import { Item } from '../items.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private loadedItems: CartItems[] = [];

  constructor() {}

  addToCart(item: Item) {
    const itemExists = this.loadedItems.find((loadedItem) => {
      return loadedItem.item.id === item.id;
    });
    if (itemExists) {
      itemExists.quantity++;
    } else {
      this.loadedItems.push({ item, quantity: 1 });
    }
  }

  removeFromCart(item: Item) {
    const itemExists = this.loadedItems.find((loadedItem) => {
      return loadedItem.item.id === item.id;
    });
    if (itemExists.quantity > 1) {
      itemExists.quantity--;
    } else {
      this.loadedItems = this.loadedItems.filter((loadedItem) => {
        return loadedItem.item.id !== item.id;
      });
    }
  }

  getTotalPrice() {
    return this.loadedItems.reduce((total, item) => {
      return total + item.item.price * item.quantity;
    }, 0);
  }

  getTotalItems() {
    return this.loadedItems.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  }

  removeAllItems() {
    return (this.loadedItems = []);
  }

  getItems() {
    return [...this.loadedItems];
  }
}
