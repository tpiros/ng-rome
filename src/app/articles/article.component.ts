import { Component, OnInit } from '@angular/core';
import { StoryblokService } from '../storyblok.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  story: any;

  constructor(private storyblokService: StoryblokService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(async (params: any) => {
      const slug = params.get('slug');
      this.story = (await this.storyblokService.getStory(slug)).story;
    });
  }
}
