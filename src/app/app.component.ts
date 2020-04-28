import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  author = 'Tamas Piros';
  footer = `© ${new Date().getFullYear()}. Created by:&nbsp;<a href="https://twitter.com/tpiros" class="hover:text-red-700 hover:underline">${this.author}<a>`;
}
