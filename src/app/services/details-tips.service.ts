import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailsTipsService {

  fdcId: string=''; // Variable to store FDC ID

  constructor(private httpClient:HttpClient) { }

  // Function to fetch food details by FDC ID
  getFoodDetails(fdcId: string): Observable<any> {
    // Make GET request to USDA FoodData Central API to fetch food details
    return this.httpClient.get(
      `https://api.nal.usda.gov/fdc/v1/food/${fdcId}?api_key=ySUpAcWeVKmRkaJbCOJpaLvYS6mr4OScsjnaYGq0`
    );
  }
}