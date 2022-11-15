import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'project-9-angular-news';

  categories = [
    'general',
    'business',
    'health',
    'science',
    'technology',
    'sports',
    'entertainment'
  ];

  selectedCategory = 'general';

  onSelect(category: string): void {
    this.selectedCategory=category;
  }

}
