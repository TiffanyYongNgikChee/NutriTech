import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailsTipsService {

  fdcId: string='';

  constructor(private httpClient:HttpClient) { }

  getFoodDetails(fdcId: string): Observable<any> {
    return this.httpClient.get(
      `https://api.nal.usda.gov/fdc/v1/food/${fdcId}?api_key=ySUpAcWeVKmRkaJbCOJpaLvYS6mr4OScsjnaYGq0`
    );
  }
}