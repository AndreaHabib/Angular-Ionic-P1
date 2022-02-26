import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemsPage } from './items.page';

const routes: Routes = [
  {
    path: '',
    component: ItemsPage
  },
  {
    path: 'items-detail',
    loadChildren: () => import('./items-detail/items-detail.module').then( m => m.ItemsDetailPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemsPageRoutingModule {}
