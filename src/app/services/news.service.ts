import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient:HttpClient) { }

  // Function to fetch all news related to health
  getNews():Observable<any>{
    return this.httpClient.get('https://api.thenewsapi.com/v1/news/all?api_token=VfjhFLNDFSLiCmHYdVT0YclMrGCPElKj44w3j328&search=health');
    }
    
    // Function to search news by categories
    searchNews(categories: string): Observable<any> {
      // Make GET request to thenewsapi.com API to search news by categories
      return this.httpClient.get(`https://api.thenewsapi.com/v1/news/all?api_token=VfjhFLNDFSLiCmHYdVT0YclMrGCPElKj44w3j328&search=${encodeURIComponent(categories)}`);
    }

}