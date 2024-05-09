import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonImg,IonTabs, IonTabBar, IonTabButton, IonIcon, IonItem, IonLabel, IonList, IonButton, IonButtons, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonSearchbar, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { TipsService } from '../services/tips.service';
import { RouterLinkWithHref } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from '../services/search.service';
import { DetailsTipsService } from '../services/details-tips.service';
//API key: ySUpAcWeVKmRkaJbCOJpaLvYS6mr4OScsjnaYGq0
@Component({
  selector: 'app-tips',
  templateUrl: './tips.page.html',
  styleUrls: ['./tips.page.scss'],
  standalone: true,
  imports: [RouterLinkWithHref,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonImg,IonTabs,IonTabBar,IonTabButton,IonIcon, IonItem,IonLabel, IonList, IonButton, ReactiveFormsModule, IonButtons, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonSearchbar, IonGrid, IonRow, IonCol]
})
export class TipsPage implements OnInit {

  // Array of arrays to store the results for each default query
  defaultResults: any[] = [];
  defaultQuery: string[]=['potato', 'noodle', 'steak', 'soup'];
  searchQuery: string = '';
  searchResults: any=[];

  constructor(private detailsService:DetailsTipsService,private router: Router,private searchService:SearchService,private tipsService:TipsService, private route: Router) { 
  }

  ngOnInit(): void {
    // Loop through each default query
    this.defaultQuery.forEach((query, index) => {
      // Fetch data for each default query
      this.tipsService.searchFood(query).subscribe(
        (data) => {
          // Store the results in the corresponding index of the defaultResults array
          this.defaultResults[index] = data.foods;
        }
      );
    });
  }
  // Function to initiate search
  search(){
    this.searchService.searchQuery = this.searchQuery;
  }
  // Function to navigate to the search page
  goAnotherPage()
  {
    this.route.navigate(['search']);
  }
  // Function to navigate to the home page
  goHome()
  {
    this.route.navigate(['/home']);
  }
  // Function to navigate to the details page
  goToDetails(fdcId: string) {
    this.detailsService.fdcId = fdcId;
    this.router.navigate(['/details']);
  }
  
}