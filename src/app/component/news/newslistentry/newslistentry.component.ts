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

  public get baseURL(){
    return environment.asset_url;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
