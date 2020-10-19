import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Service } from '../models/service';
import { State } from '../models/state';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private http: HttpClient) { }

  public getAllConnections(): Observable<Service[]> {
    return this.http.get<Service[]>(`${environment.base_url}/connections`);
  }

  public getConnection(id: number): Observable<Service>{
    return this.http.get<Service>(`${environment.base_url}/connections/${id}`);
  }

  public getStates(): Observable<State[]>{
    return this.http.get<any>(`${environment.base_url}api/states`).pipe(map(r => r.data as State[]));
  }
}
