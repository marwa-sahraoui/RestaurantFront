import { Component, OnInit } from '@angular/core';
import {Client} from '../../model/client';
import {ClientService} from '../../services/client.service';
import {Manager} from '../../model/manager';
import {ManagerService} from '../../services/manager.service';

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.css']
})
export class AddManagerComponent implements OnInit {
  manager: Manager = new Manager();
  submitted = false;
  constructor(private managerService: ManagerService) { }

  ngOnInit(): void {
  }
  saveManager(): void {
    const data = {
      firstName: this.manager.firstName,
      lastName: this.manager.lastName,
      restaurants: this.manager.restaurants,
      email: this.manager.email
    };
    this.managerService.save(data)
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

  newManager(): void {
    this.submitted = false;
    this.manager = new Manager();
  }
}
