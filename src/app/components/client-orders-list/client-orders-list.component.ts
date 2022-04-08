import { Component, OnInit } from '@angular/core';
import {RestaurantService} from '../../services/restaurant.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Restaurant} from '../../model/restaurant.model';
import {OrderService} from '../../services/order.service';
import {Order} from '../../model/order';

@Component({
  selector: 'app-client-orders-list',
  templateUrl: './client-orders-list.component.html',
  styleUrls: ['./client-orders-list.component.css']
})
export class ClientOrdersListComponent implements OnInit {
  orders: any;
  currentOrder: any = null;
  currentIndex = -1;
  description = '';
  clientId: any;

  constructor(private orderService: OrderService,
              private route: ActivatedRoute,
              public router: Router) {
  }

  ngOnInit(): void {
    this.retrieveOrders(this.route.snapshot.paramMap.get('id'));
  }

  retrieveOrders(clientId: any): void {
    this.orderService.findByClientId(clientId)
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
    this.retrieveOrders(this.route.snapshot.paramMap.get('id'));
    this.currentOrder = new Order();
    this.currentIndex = -1;
  }

  setActiveOrder(order: Order, index: any): void {
    this.currentOrder = order;
    this.currentIndex = index;
  }
}
