import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
const baseUrl = 'http://localhost:8080/restaurants';
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) {
  }

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

  findByManagerId(managerId: any): Observable<any> {
    return this.http.get(`${baseUrl}/manager/${managerId}`);
  }
}
