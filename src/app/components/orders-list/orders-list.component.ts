import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../services/order.service';
import {Restaurant} from '../../model/restaurant.model';
import {Order} from '../../model/order';
import {Router} from '@angular/router';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {
  orders: any;
  currentOrder: any = null;
  currentIndex = -1;
  name = '';
  constructor(private orderService: OrderService, public router: Router) { }

  ngOnInit(): void {
    this.retrieveOrders();
  }
  retrieveOrders(): void {
    this.orderService.findAll()
      .subscribe(
        data => {
          this.orders = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveOrders();
    this.currentOrder = new Restaurant();
    this.currentIndex = -1;
  }

  setActiveOrder(order: Order, index: any): void {
    this.currentOrder = order;
    this.currentIndex = index;
  }
}
