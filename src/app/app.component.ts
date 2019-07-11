import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';
  newLink = {
    title: "New Link",
    url: "New Link URL"
  };
  links = [
    {
      title: "Tour of Heroes [New]",
      url: "https://angular.io/tutorial"
    },
    {
      title: "CLI Documentation [New]",
      url: "https://angular.io/tutorial"
    },
    {
      title: "Angular blog",
      url: "https://blog.angular.io/"
    }
  ];
  addNewLink(title, url) {
    this.links.push({ title, url });
  }
}
