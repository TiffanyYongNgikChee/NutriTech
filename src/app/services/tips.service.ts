import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipsService {

  constructor(private httpClient: HttpClient) { }

  // Function to search food by name
  searchFood(foodName: string): Observable<any> {
    // Make GET request to USDA FoodData Central API to search food by name
    return this.httpClient.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=ySUpAcWeVKmRkaJbCOJpaLvYS6mr4OScsjnaYGq0&query=${encodeURIComponent(foodName)}`);
  }
  
}