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

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    NewslistComponent,
    NewsitemComponent,
    NewslistentryComponent,
    NewsOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
