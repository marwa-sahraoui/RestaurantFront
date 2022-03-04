import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {findAll} from '@angular/compiler-cli/ngcc/src/utils';
import {any} from 'codelyzer/util/function';
const baseUrl = 'http://localhost:8080/products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

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
}

