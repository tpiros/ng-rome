import { Component, OnInit } from '@angular/core';
import { StoryblokService } from '../storyblok.service'


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  _wordCount(str) {
    str.replace(/(^\s*)|(\s*$)/gi,'');
    str.replace(/[ ]{2,}/gi,' ');
    str.replace(/\n /,'\n');
    return str;
  }

  constructor(private storyblokService: StoryblokService) {}
  stories: any[];
  readtimes: Map<string, string> = new Map();
  async ngOnInit() {
    this.stories = (await this.storyblokService.getStories()).stories;
    console.log(this.stories);
    this.stories.forEach(story => {
      const rt = Math.round(this._wordCount(story.content.body).length / 275);
      this.readtimes.set(story.content._uid, rt > 1 ? `${rt} mins` : `${rt} min to read`)
    });
  }

}
