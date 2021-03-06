import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListPage } from './product-list/product-list.page';

const routes: Routes = [
  {
    path:'',
    redirectTo:'list'
  },
  {
    path: 'list',
    component: ProductListPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  
})
export class ProductsRoutingModule {}
