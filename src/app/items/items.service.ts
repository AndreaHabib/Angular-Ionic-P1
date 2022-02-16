import { Injectable } from '@angular/core';
import { Item } from './items.interface';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  private items: Item[] = [
    {
      id: 1,
      title: 'Item 1',
      imageUrl: 'https://via.placeholder.com/150',
      ingredients: ['ingredient 1', 'ingredient 2', 'ingredient 3'],
    },
    {
      id: 2,
      title: 'Item 2',
      imageUrl: 'https://via.placeholder.com/150',
      ingredients: ['ingredient 1', 'ingredient 2', 'ingredient 3'],
    },
  ];

  constructor() {}

  getAllItems() {
    return [...this.items];
  }

  getItem(id: number) {
    return { ...this.items.find((item) => item.id === id) };
  }
}
