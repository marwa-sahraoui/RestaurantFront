import { Component, OnInit } from '@angular/core';
import {RestaurantService} from '../../services/restaurant.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Restaurant} from '../../model/restaurant.model';

@Component({
  selector: 'app-manager-restaurants-list',
  templateUrl: './manager-restaurants-list.component.html',
  styleUrls: ['./manager-restaurants-list.component.css']
})
export class ManagerRestaurantsListComponent implements OnInit {
  restaurants: any;
  currentRestaurant: any = null;
  currentIndex = -1;
  name = '';
  address = '';
  managerId: any;

  constructor(private restaurantService: RestaurantService,
              private route: ActivatedRoute,
              public router: Router) {
  }

  ngOnInit(): void {
    this.retrieveRestaurants(this.route.snapshot.paramMap.get('id'));
  }

  retrieveRestaurants(managerId: any): void {
    this.restaurantService.findByManagerId(managerId)
      .subscribe(
        data => {
          this.restaurants = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveRestaurants(this.route.snapshot.paramMap.get('id'));
    this.currentRestaurant = new Restaurant();
    this.currentIndex = -1;
  }

  setActiveRestaurant(restaurant: Restaurant, index: any): void {
    this.currentRestaurant = restaurant;
    this.currentIndex = index;
  }
}
