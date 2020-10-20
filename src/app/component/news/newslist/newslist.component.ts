import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/service/news.service';


@Component({
  selector: 'newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.scss']
})
export class NewslistComponent implements OnInit {

  @Input() emitEvent: boolean = false;

  @Output() newsItemClick = new EventEmitter<News>();
  public news: News[];

  constructor(private newsListService: NewsService, private router: Router ) { }

  ngOnInit(): void {
    this.newsListService.getNews().subscribe(r => {
      this.news = r;
    })
  }

  emitNewsEntry(newsItem: News){
    this.newsItemClick.emit(newsItem);
  }
}
