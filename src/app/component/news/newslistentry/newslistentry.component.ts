import { Component, Input, OnInit } from '@angular/core';
import { News } from 'src/app/models/news';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'newslistentry',
  templateUrl: './newslistentry.component.html',
  styleUrls: ['./newslistentry.component.scss']
})
export class NewslistentryComponent implements OnInit {
  @Input() newsEntry: News;

  @Input() alternateStyle: boolean = false;

  public get baseURL(){
    return environment.asset_url;
  }

  public imageUrl: string;

  public textContent: string;

  public createdAt: Date;

  private get milliseconds(){
    return 1000;
  }

  constructor() { }

  ngOnInit(): void {

    this.imageUrl = this.baseURL + this.newsEntry.image_url;

    this.createdAt = new Date(this.newsEntry.created_at * this.milliseconds);

    let tmp = document.createElement("DIV");
    tmp.innerHTML = this.newsEntry.description;
    this.textContent = tmp.textContent || tmp.innerText || "";
  }

  onError(): void {
    this.imageUrl = "/assets/images/fallback.jpg"
  }

}