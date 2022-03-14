import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service';
import {Client} from '../../model/client';
import {Product} from '../../model/product';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
 client: Client = new Client();
 submitted = false;
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
  }
  saveClient(): void {
    const data = {
      firstName: this.client.firstName,
      lastName: this.client.lastName,
      email: this.client.email,
      paypalId: this.client.paypalId
    };
    this.clientService.save(data)
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

  newClient(): void {
    this.submitted = false;
    this.client = new Client();
  }
}
