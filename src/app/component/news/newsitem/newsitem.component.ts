import { Component, Input, OnInit } from '@angular/core';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/service/news.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'newsitem',
  templateUrl: './newsitem.component.html',
  styleUrls: ['./newsitem.component.scss']
})
export class NewsitemComponent implements OnInit {

  @Input() newsItem: News;

  public get baseURL(){
    return environment.asset_url;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
