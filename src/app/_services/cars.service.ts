import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Ejecución local
// const API_URL = 'http://localhost:8080/api/';
// Ejecución en vercel.com
const API_URL = 'https://springboot-jwt.up.railway.app/api/';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(API_URL + 'cars');
  }

}
