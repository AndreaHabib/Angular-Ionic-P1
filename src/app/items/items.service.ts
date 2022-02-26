import { Injectable } from '@angular/core';
import { Item } from './items.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  private items: Item[] = [
    {
      id: 1,
      title: 'Apple',
      description: 'Eat one every day to keep the doctor away.',
      imageUrl:
        'https://media.istockphoto.com/photos/red-apple-picture-id495878092?b=1&k=20&m=495878092&s=170667a&w=0&h=bJgILGFxOka0ymPlgilH8qaRxFhKole_M6IiYs6RyGM=',
      facts: [
        'APPLES CONTAIN MALIC ACID',
        'APPLES ARE HIGH IN FIBER',
        'APPLE CONSUMPTION MAY REDUCE THE RISK OF CANCER',
      ],
      price: 10,
    },
    {
      id: 2,
      title: 'Grape',
      description: 'Wine is great - especially made from grapes!',
      imageUrl:
        'https://img.imageboss.me/fourwinds/width/425/dpr:2/s/files/1/2336/3219/products/blackmonukka.jpg?v=1538780984',
      facts: [
        'Helps your immune system',
        'Prevents cancer',
        'Lowers blood pressure',
      ],
      price: 20,
    },
    {
      id: 3,
      title: 'GrapeFruit',
      description: 'Pink or red, always healthy and delicious.',
      imageUrl:
        'https://i5.walmartimages.com/asr/c23d870b-225f-4818-afe3-0b4add48afe6.b78126a7bd277fd29afbeb21dac10e04.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
      facts: [
        'Benefit Your Immune System',
        'Promote Appetite Control',
        'Aid Weight Loss',
      ],
      price: 30,
    },
    {
      id: 4,
      title: 'Papaya',
      description: 'Super-popular for breakfast.',
      imageUrl:
        'https://media.istockphoto.com/photos/whole-and-half-of-ripe-papaya-fruit-with-seeds-isolated-on-white-picture-id864053288?k=20&m=864053288&s=612x612&w=0&h=8HEr_Yxju24vyhbXlcbsOwJur5YP7s6tbDKo_JUaDjk=',
      facts: [
        'Powerful Antioxidant Effects',
        'Anticancer Properties',
        'Improve Heart Health',
      ],
      price: 40,
    },
    {
      id: 5,
      title: 'Pineapple',
      description: 'A tropical fruit with a distinctive scent.',
      imageUrl:
        'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGluZWFwcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      facts: [
        'Disease-Fighting Antioxidants',
        'Its Enzymes Can Ease Digestion',
        'Help Reduce the Risk of Cancer',
      ],
      price: 50,
    },
  ];

  constructor(private router: Router) {}

  getAllItems() {
    return [...this.items];
  }

  getItem(id: number) {
    return { ...this.items.find((item) => item.id === id) };
  }
}
