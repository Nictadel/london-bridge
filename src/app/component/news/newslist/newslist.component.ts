import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/service/news.service';


@Component({
  selector: 'newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.scss']
})
export class NewslistComponent implements OnInit {

  public news: News[];

  constructor(private newsListService: NewsService, private router: Router ) { }

  ngOnInit(): void {
    this.newsListService.getNews().subscribe(r => {
      this.news = r;
    })
  }

  onSelect(newsItemId: number){
      this.router.navigate(['/news', newsItemId]);
  }

}
