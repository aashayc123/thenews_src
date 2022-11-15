export interface ApiResponse {
    status: string;
    totalResults: number;
    articles: [Article];
  }

export interface Article {
  source: { 
    id: null;
    name: string;
  };
  author: string;
  title:  string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
}