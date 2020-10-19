import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.scss']
})
export class NewsArticleComponent implements OnInit {

  public newsItem: News;

  constructor(private newsListService: NewsService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    let id = parseInt(this.route.snapshot.paramMap.get('id'));

    this.newsListService.getNewsById(id).subscribe(r => {
      this.newsItem = r;
    })
  }
}
