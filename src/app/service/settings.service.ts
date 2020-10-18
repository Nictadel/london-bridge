import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Settings } from 'src/app/models/settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  constructor(private http: HttpClient) { }

  public getSettings(): Observable<Settings> {
    return this.http.get<Settings>(`${environment.base_url}/settings`);
  }

}
