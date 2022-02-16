import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemsDetailPageRoutingModule } from './items-detail-routing.module';

import { ItemsDetailPage } from './items-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemsDetailPageRoutingModule
  ],
  declarations: [ItemsDetailPage]
})
export class ItemsDetailPageModule {}
