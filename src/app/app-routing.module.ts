import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { NewsArticleComponent } from './routes/news-article/news-article.component';
import { NewsOverviewComponent } from './routes/news-overview/news-overview.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'news',
    pathMatch: 'full',
    component: NewsOverviewComponent
  },
  {
    path: 'news/:id',
    pathMatch: 'full',
    component: NewsArticleComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
