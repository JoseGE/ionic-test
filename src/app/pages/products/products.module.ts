import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ProductListPage } from './product-list/product-list.page';
import { ProductsRoutingModule } from './products-routing.module';
import { ApiService } from 'src/app/services/api.service';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsRoutingModule
  ],
 
  declarations: [ProductListPage]
})
export class ProductsModule {}
