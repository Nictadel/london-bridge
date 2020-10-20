import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'header-article-mobile',
  templateUrl: './header-article-mobile.component.html',
  styleUrls: ['./header-article-mobile.component.scss']
})
export class HeaderArticleMobileComponent implements OnInit {

  @Input() title: boolean;

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

}
