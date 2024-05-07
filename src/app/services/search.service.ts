import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchQuery: string='';

  constructor(private httpClient: HttpClient) { }

  searchFood(foodName: string): Observable<any> {
    return this.httpClient.get(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=ySUpAcWeVKmRkaJbCOJpaLvYS6mr4OScsjnaYGq0&query=${encodeURIComponent(foodName)}`);
  }
}