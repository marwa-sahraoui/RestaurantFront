import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../model/product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products: any;
  currentProduct: Product = new Product();
  currentIndex = -1;
  name = '';
  description = '';
  price = '';
  score = '';
  constructor(private productService: ProductService, public router: Router) { }

  ngOnInit(): void {
    this.retrieveProduct();
  }
  // tslint:disable-next-line:typedef
  private retrieveProduct() {
    this.productService.findAll()
      .subscribe(
        data => {
          this.products = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveProduct();
    this.currentProduct = new Product();
    this.currentIndex = -1;
  }

  setActiveProduct(product: Product, index: any): void {
    this.currentProduct = product;
    this.currentIndex = index;
  }


}
