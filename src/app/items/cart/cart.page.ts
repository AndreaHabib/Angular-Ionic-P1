import { Component, OnInit } from '@angular/core';
import { Item } from '../items.interface';
import { CartService } from './cart.service';
import { CartItems } from './cart.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartItems: CartItems[];
  totalPrice: number;
  totalItems: number;

  constructor(private CartService: CartService) {
    this.cartItems = this.CartService.getItems();
    this.totalPrice = this.CartService.getTotalPrice();
    this.totalItems = this.CartService.getTotalItems();
  }

  onAddToCart(item: Item) {
    this.CartService.addToCart(item);
    this.cartItems = this.CartService.getItems();
    this.totalPrice = this.CartService.getTotalPrice();
    this.totalItems = this.CartService.getTotalItems();
  }

  onRemoveFromCart(item: Item) {
    this.CartService.removeFromCart(item);
    this.cartItems = this.CartService.getItems();
    this.totalPrice = this.CartService.getTotalPrice();
    this.totalItems = this.CartService.getTotalItems();
  }

  onRemove() {
    this.cartItems = this.CartService.removeAllItems();
    this.totalPrice = this.CartService.getTotalPrice();
    this.totalItems = this.CartService.getTotalItems();
  }

  ngOnInit() {}
}
