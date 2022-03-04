import {Component, OnInit} from '@angular/core';
import {RestaurantService} from '../../services/restaurant.service';
import {Restaurant} from '../../model/restaurant.model';


@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
  restaurant: Restaurant = new Restaurant();
  submitted = false;

  constructor(private restaurantService: RestaurantService) {
  }

  ngOnInit(): void {
  }

  saveRestaurant(): void {
    const data = {
      name: this.restaurant.name,
      address: this.restaurant.address
    };
    this.restaurantService.save(data)
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

  newRestaurant(): void {
    this.submitted = false;
    this.restaurant = new Restaurant();
  }
 }

