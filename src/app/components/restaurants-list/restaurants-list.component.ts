import {Component, OnInit} from '@angular/core';
import {RestaurantService} from '../../services/restaurant.service';
import {Restaurant} from '../../model/restaurant.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.css']
})
export class RestaurantsListComponent implements OnInit {
  restaurants: any;
  currentRestaurant: any = null;
  currentIndex = -1;
  name = '';
  address = '';

  constructor(private restaurantService: RestaurantService, public router: Router) {
  }

  ngOnInit(): void {
    this.retrieveRestaurants();
  }

  retrieveRestaurants(): void {
    this.restaurantService.findAll()
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
    this.retrieveRestaurants();
    this.currentRestaurant = new Restaurant();
    this.currentIndex = -1;
  }

  setActiveRestaurant(restaurant: Restaurant, index: any): void {
    this.currentRestaurant = restaurant;
    this.currentIndex = index;
  }
}
