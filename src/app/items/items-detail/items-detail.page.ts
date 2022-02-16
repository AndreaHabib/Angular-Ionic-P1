import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../items.interface';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-items-detail',
  templateUrl: './items-detail.page.html',
  styleUrls: ['./items-detail.page.scss'],
})
export class ItemsDetailPage implements OnInit {
  loadedItem: Item;

  constructor(
    private activeRoute: ActivatedRoute,
    private itemService: ItemsService
  ) {}

  ngOnInit() {
    this.activeRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('itemId')) {
        return;
      } else {
        const itemId = paramMap.get('itemId');
        this.loadedItem = this.itemService.getItem(parseInt(itemId));
      }
    });
  }
}
