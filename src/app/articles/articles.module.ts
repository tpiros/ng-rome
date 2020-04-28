import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { ArticleComponent } from './article.component';
import { MarkdownModule } from 'ngx-markdown';
import { TagListPipe } from './tag-list.pipe';


@NgModule({
  declarations: [ArticlesComponent, ArticleComponent, TagListPipe],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    MarkdownModule.forRoot()
  ]
})
export class ArticlesModule { }
