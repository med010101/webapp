import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private baseUrl = "http://localhost:8080/api/customers";

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.baseUrl}/`);
  }

  createClient(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/new`, data);
  }

  getClientById(id: number): Observable<any> {
    return this.http.get<Client>(`${this.baseUrl}/${id}`);
  }

  updateClient(id: number, client: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${id}`, client);
  }

  deleteClient(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }
}
