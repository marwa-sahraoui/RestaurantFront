import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service';
import {Client} from '../../model/client';
import {privateEntriesToIndex} from '@angular/compiler-cli/src/metadata/index_writer';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  currentClient: Client = new Client();
  message = '';

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.message = '';
    this.currentClient = new Client({
      firstName: '',
      lastName: '',
      email: '',
      paypalId: ''
    });
    this.getClient(this.route.snapshot.paramMap.get('id'));
  }
   getClient(id: any): void {
    this.clientService.findById(id)
      .subscribe(
        data => {
          this.currentClient = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  updatePublished(status: any): void {
    const data = {
      title: this.currentClient.firstName,
      description: this.currentClient.lastName,
      price: this.currentClient.email,
      score: this.currentClient.paypalId,
      published: status
    };
    this.clientService.update(this.currentClient.id, data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateClient(): void {
    this.clientService.update(this.currentClient.id, this.currentClient)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The client was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteClient(): void {
    this.clientService.delete(this.currentClient.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/clients']);
        },
        error => {
          console.log(error);
        });
  }
}
