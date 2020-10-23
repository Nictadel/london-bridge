import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

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
import { HeaderArticleMobileComponent } from './component/header-article-mobile/header-article-mobile.component';
import { EllipsisModule } from 'ngx-ellipsis';
import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl';
import { ConnectionInfoComponent } from './component/connection-info/connection-info.component';
import { ConnectionPanelComponent } from './component/connection-panel/connection-panel.component';

registerLocaleData(localeNl);

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
    MapPopupComponent,
    HeaderArticleMobileComponent,
    ConnectionInfoComponent,
    ConnectionPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EllipsisModule,
    NgxMapboxGLModule.withConfig({
      accessToken: environment.mapbox_token,
    })
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'nl-BE' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
