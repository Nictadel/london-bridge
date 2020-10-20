import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/service/news.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'newsitem',
  templateUrl: './newsitem.component.html',
  styleUrls: ['./newsitem.component.scss']
})
export class NewsitemComponent implements OnInit, OnChanges {

  @Input() newsItem: News;

  public imageUrl: string;

  public createdAt: Date;
  
  public updatedAt: Date;

  private get milliseconds(){
    return 1000;
  }

  public get baseURL(){
    return environment.asset_url;
  }

  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges(): void {
    this.imageUrl = this.baseURL + this.newsItem.image_url;

    this.createdAt = new Date(this.newsItem.created_at * this.milliseconds);
    this.updatedAt = new Date(this.newsItem.updated_at * this.milliseconds);
  }

  onError(): void {
    this.imageUrl = "/assets/images/fallback.jpg"
  }

}
