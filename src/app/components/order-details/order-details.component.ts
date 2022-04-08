import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Order} from '../../model/order';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  currentOrder: Order = new Order();
  message = '';
  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    public router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.currentOrder = new Order({
      description: '',
      orderItems: '',
      amount: '',
      created: ''
    });
    this.getOrder(this.route.snapshot.paramMap.get('id'));
  }
  getOrder(id: any): void {
    this.orderService.findById(id)
      .subscribe(
        data => {
          this.currentOrder = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status: any): void {
    const data = {
      description: this.currentOrder.description,
      orderItems: this.currentOrder.orderItems,
      amount: this.currentOrder.amount,
      created: this.currentOrder.created,
      published: status
    };
    this.orderService.update(this.currentOrder.id, data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateOrder(): void {
    this.orderService.update(this.currentOrder.id, this.currentOrder)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The order was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteOrder(): void {
    this.orderService.delete(this.currentOrder.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/orders']);
        },
        error => {
          console.log(error);
        });
  }
}
