import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { News } from '../models/news';
import { JitEmitterVisitor } from '@angular/compiler/src/output/output_jit';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  public getNews(): Observable<News> {
    return this.http.get<News>(`${environment.base_url}/news`);
  }
}
