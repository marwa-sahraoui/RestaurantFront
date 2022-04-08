import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../services/product.service';
import {Order} from '../../model/order';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  order: Order = new Order();
  submitted = false;
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  }
  saveOrder(): void {
    const data = {
      description: this.order.description,
      orderItems: this.order.orderItems,
      amount: this.order.amount,
      created: this.order.created
    };
    this.orderService.save(data)
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

  newOrder(): void {
    this.submitted = false;
    this.order = new Order();
  }

}
