import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service';
import {Client} from '../../model/client';
import {Router} from '@angular/router';


@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {
   clients: any;
   currentClient: Client = new Client();
   currentIndex = -1;
   firstName = '';
   lastName = '';
   email = '';
   paypalId = '';
  constructor(private clientService: ClientService, public router: Router) { }

  ngOnInit(): void {
  this.retrieveClient();
  }

  // tslint:disable-next-line:typedef
  private retrieveClient() {
    this.clientService.findAll()
      .subscribe(
        data => {
          this.clients = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList(): void {
    this.retrieveClient();
    this.currentClient = new Client();
    this.currentIndex = -1;
  }
  setActiveClient(client: Client, index: any): void{
    this.currentClient = client;
    this.currentIndex = index;
  }
}
