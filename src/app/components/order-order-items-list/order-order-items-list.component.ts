import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../services/order.service';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderItem} from '../../model/order-item';


@Component({
  selector: 'app-order-order-items-list',
  templateUrl: './order-order-items-list.component.html',
  styleUrls: ['./order-order-items-list.component.css']
})
export class OrderOrderItemsListComponent implements OnInit {
  public orderItems: any;
  public orderId: any = '';

  constructor(private orderService: OrderService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.orderId = this.route.snapshot.paramMap.get('id');
    this.retrieveOrderItems(this.orderId);
  }

  retrieveOrderItems(id: any): void {
    this.orderService.getOrderItemsByOrderId(id)
      .subscribe(
        data => {
          this.orderItems = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveOrderItems(this.route.snapshot.paramMap.get('id'));
  }
}
