import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../model/product';
import {Restaurant} from '../../model/restaurant.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product = new Product();
  submitted = false;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }
    saveProduct(): void {
      const data = {
        name: this.product.name,
        description: this.product.description,
        price: this.product.price,
        score: this.product.score
      };
      this.productService.save(data)
        .subscribe(
          response => {
            console.log(response);
            this.submitted = true;
          },
          // tslint:disable-next-line:no-shadowed-variable
          error => {
            console.log(error);
          });
    }

    newProduct(): void {
      this.submitted = false;
      this.product = new Product();
    }

}
