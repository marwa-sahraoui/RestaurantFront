import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
const baseUrl = 'http://localhost:8080/orders';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  findAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  findById(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  save(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/add`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  findByClientId(clientId: any): Observable<any> {
    return this.http.get(`${baseUrl}/clientId/${clientId}`);
  }

  getOrderItemsByOrderId(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}/order-items`);
  }
}
