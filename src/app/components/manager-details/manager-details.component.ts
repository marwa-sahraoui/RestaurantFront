import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ManagerService} from '../../services/manager.service';
import {Manager} from '../../model/manager';
import {Client} from '../../model/client';

@Component({
  selector: 'app-manager-details',
  templateUrl: './manager-details.component.html',
  styleUrls: ['./manager-details.component.css']
})
export class ManagerDetailsComponent implements OnInit {
  currentManager: Manager = new Manager();
  message = '';

  constructor(
    private managerService: ManagerService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.message = '';
    this.currentManager = new Manager({
      firstName: '',
      lastName: '',
      restaurants: '',
      email: ''
    });
    this.getManager(this.route.snapshot.paramMap.get('id'));
  }
    getManager(id: any): void {
    this.managerService.findById(id)
      .subscribe(
        data => {
          this.currentManager = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  updatePublished(status: any): void {
    const data = {
      title: this.currentManager.firstName,
      description: this.currentManager.lastName,
      price: this.currentManager.restaurants,
      score: this.currentManager.email,
      published: status
    };
    this.managerService.update(this.currentManager.id, data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateManager(): void {
    this.managerService.update(this.currentManager.id, this.currentManager)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The manager was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteManager(): void {
    this.managerService.delete(this.currentManager.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/managers']);
        },
        error => {
          console.log(error);
        });
  }
}
