import { Component, OnInit, } from '@angular/core';
import { Location } from '@angular/common';
import { SettingsService } from 'src/app/service/settings.service';
import { Settings } from 'src/app/models/settings';
import { News } from 'src/app/models/news';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public currSettings: Settings;

  public currentNewsItem?: News = null;

  constructor(private location: Location, private settingsService: SettingsService) { }

  ngOnInit(): void {
    
    this.settingsService.getSettings().subscribe(r => {
      this.currSettings = r
      const localSettings = localStorage.getItem('settings');

      if(localSettings === ''){
        localStorage.setItem('settings', this.currSettings.version);
        return;
      }
      if(localSettings !== this.currSettings.version){
        localStorage.setItem('settings', this.currSettings.version);
        window.location.reload(); //Re-initialize cache on api version change
      }
    });
  }

  handleNewsClick(newsItem: News): void {
    this.currentNewsItem = newsItem;
  }

  handleNewsClose(): void {
    this.currentNewsItem = null;
  }

}
