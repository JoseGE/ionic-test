import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: 'product-list.page.html',
  
})
export class ProductListPage implements OnInit {

  constructor(private apiService:ApiService) {}

  ngOnInit() {
    this.loadProductList();
  }

  loadProductList() {
    this.apiService.productList().subscribe((productList: Array<IProduct>) =>{
      console.log(productList);
    })
  }

}
