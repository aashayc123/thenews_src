import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../news';

@Component({
  selector: 'app-news-unit',
  templateUrl: './news-unit.component.html',
  styleUrls: ['./news-unit.component.sass']
})
export class NewsUnitComponent implements OnInit  {

  constructor() { 
  }

  @Input() unit: Article= {
    source: {
      id: null,
      name: ''
    },
    author: '',
    title: '',
    description: '',
    url: '',
    urlToImage: '',
    publishedAt: new Date,
    content: ''
  };

  ngOnInit(): void {    
    
  }
    
}
