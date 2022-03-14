import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../model/product';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
 currentProduct: Product = new Product();
  message = '';
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.currentProduct = new Product({
      name: '',
      description: '',
      price: '',
      score: ''
    });
    this.getProduct(this.route.snapshot.paramMap.get('id'));
  }
    getProduct(id: any): void {
      this.productService.findById(id)
        .subscribe(
          data => {
            this.currentProduct = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }

    updatePublished(status: any): void {
      const data = {
        title: this.currentProduct.name,
        description: this.currentProduct.description,
        price: this.currentProduct.price,
        score: this.currentProduct.score,
        published: status
      };
      this.productService.update(this.currentProduct.id, data)
        .subscribe(
          response => {
            console.log(response);
          },
          error => {
            console.log(error);
          });
    }

    updateProduct(): void {
      this.productService.update(this.currentProduct.id, this.currentProduct)
        .subscribe(
          response => {
            console.log(response);
            this.message = 'The product was updated successfully!';
          },
          error => {
            console.log(error);
          });
    }

    deleteProduct(): void {
      this.productService.delete(this.currentProduct.id)
        .subscribe(
          response => {
            console.log(response);
            this.router.navigate(['/products']);
          },
          error => {
            console.log(error);
          });
    }
}
