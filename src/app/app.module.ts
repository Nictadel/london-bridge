import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './component/nav-menu/nav-menu.component';
import { HomeComponent } from './routes/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NewslistComponent } from './component/news/newslist/newslist.component';
import { NewsitemComponent } from './component/news/newsitem/newsitem.component';
import { NewslistentryComponent } from './component/news/newslistentry/newslistentry.component';
import { NewsOverviewComponent } from './routes/news-overview/news-overview.component';
import { NewsArticleComponent } from './routes/news-article/news-article.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { environment } from 'src/environments/environment';
import { DisplayMapComponentComponent } from './component/display-map-component/display-map-component.component';
import { MapPopupComponent } from './component/map-popup/map-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    NewslistComponent,
    NewsitemComponent,
    NewslistentryComponent,
    NewsOverviewComponent,
    NewsArticleComponent,
    DisplayMapComponentComponent,
    MapPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxMapboxGLModule.withConfig({
      accessToken: environment.mapbox_token,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
