import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  public getNews(): Observable<News[]> {
    return this.http.get<News[]>(`${environment.base_url}/news`);
  }

  public getNewsById(id: number): Observable<News> {
    return this.http.get<News[]>(`${environment.base_url}/news`).pipe(map(r => {
      for (let newsItem of r){
        if (newsItem.id === id){
          return newsItem;
        }
      }
      return null;
    })
    );
  }

}
