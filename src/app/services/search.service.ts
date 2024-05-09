import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchQuery: string=''; // Variable to store search query

  constructor(private httpClient: HttpClient) { }

  // Function to search food by name
  searchFood(foodName: string): Observable<any> {
    // Make GET request to USDA FoodData Central API to search food by name
    return this.httpClient.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=ySUpAcWeVKmRkaJbCOJpaLvYS6mr4OScsjnaYGq0&query=${encodeURIComponent(foodName)}`);
  }
}