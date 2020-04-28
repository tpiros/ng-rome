import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesComponent } from './articles.component';
import { ArticleComponent } from './article.component';

const routes: Routes = [
  { path: '', component: ArticlesComponent },
  { path: ':slug', component: ArticleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
