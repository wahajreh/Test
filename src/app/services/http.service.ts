import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl = 'http://localhost:5183';

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+'/GetAll');
  }

  getItemById(itemId: number): Observable<any> {
    const url = `${this.apiUrl}/${itemId}`;
    return this.http.get<any>(url);
  }

  createItem(itemData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/create', itemData);
  }

  editItem(itemId: number, updatedData: any): Observable<any> {
    const url = `${this.apiUrl}/${itemId}`;
    return this.http.put<any>(url, updatedData);
  }

  deleteItem(itemId: number): Observable<any> {
    const url = `${this.apiUrl}/${itemId}`;
    return this.http.delete<any>(url);
  }
}
