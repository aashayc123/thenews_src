import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { NewsProviderService } from '../news-provider.service';

@Component({
  selector: 'app-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.sass']
})
export class NewsSectionComponent implements OnInit, OnChanges {

  constructor(private newsprovider: NewsProviderService) { }

  news= new Array;

  @Input() category !: string;

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.newsprovider.getNews(this.category).subscribe(data => this.news=data.articles);
  }

}
