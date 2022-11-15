import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from './news';

@Injectable({
  providedIn: 'root'
})
export class NewsProviderService {

  constructor(private http: HttpClient) {    }
  
  testUrl?: string;

  getNews(category: String){
    this.testUrl = `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`;
    return this.http.get<ApiResponse>(this.testUrl);
  };
}
