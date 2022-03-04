import {Component, OnInit} from '@angular/core';
import {RestaurantService} from '../../services/restaurant.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Restaurant} from '../../model/restaurant.model';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {
  currentRestaurant: Restaurant = new Restaurant();
  message = '';

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.message = '';
    this.currentRestaurant = new Restaurant({
      name: '',
      address: ''
    });
    this.getRestaurant(this.route.snapshot.paramMap.get('id'));
  }

  getRestaurant(id: any): void {
    this.restaurantService.findById(id)
      .subscribe(
        data => {
          this.currentRestaurant = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status: any): void {
    const data = {
      name: this.currentRestaurant.name,
      address: this.currentRestaurant.address,
    };
    this.restaurantService.update(this.currentRestaurant.id, data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateRestaurant(): void {
    this.restaurantService.update(this.currentRestaurant.id, this.currentRestaurant)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The restaurant was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteRestaurant(): void {
    this.restaurantService.delete(this.currentRestaurant.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/restaurants']);
        },
        error => {
          console.log(error);
        });
  }
}
