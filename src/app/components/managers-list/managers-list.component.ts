import { Component, OnInit } from '@angular/core';
import {Manager} from '../../model/manager';
import {ManagerService} from '../../services/manager.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-managers-list',
  templateUrl: './managers-list.component.html',
  styleUrls: ['./managers-list.component.css']
})
export class ManagersListComponent implements OnInit {
  managers: any;
  currentManager: Manager = new Manager();
  currentIndex = -1;
  firstName =  '';
  lastName  = '';
  email = '';
  restaurants = '';
  constructor(private managerService: ManagerService, public router: Router) { }

  ngOnInit(): void {
    this.retrieveManager();
  }
  // tslint:disable-next-line:typedef
  private retrieveManager() {
    this.managerService.findAll()
      .subscribe(
        data => {
          this.managers = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList(): void {
    this.retrieveManager();
    this.currentManager = new Manager();
    this.currentIndex = -1;
  }
  setActiveManager(manager: Manager, index: any): void{
    this.currentManager = manager;
    this.currentIndex = index;
  }
}
