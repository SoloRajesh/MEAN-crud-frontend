import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HostListener, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  url = 'http://localhost:5000/';

  constructor(private http: HttpClient) {}

  postRegister(data: any): Observable<any> {
    return this.http.post<any>(this.url + 'register', data);
  }
  postLogin(data: any): Observable<any> {
    return this.http.post<any>(this.url + 'login', data);
  }

  isLoggedIn() {
      return localStorage.getItem('token');
  }
  
  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler(event: Event): void {
    // Clear local storage when the browser reload button is clicked
    localStorage.clear();
  }

  getItems(): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'customers');
  }
  getItem(id: any): Observable<any> {
    return this.http.get<any>(`${this.url}customers/${id}`);
  }
  createItem(data: any): Observable<any> {
    return this.http.post<any>(this.url + 'customer/create', data);
  }
  updateItem(id: any, currentData: any): Observable<any> {
    return this.http.put<any>(`${this.url}customers/${id}`, currentData);
  }
  deleteItem(id: any): Observable<any> {
    return this.http.delete<any>(`${this.url}customers/${id}`);
  }
}
