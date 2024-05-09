import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonSearchbar, IonTabs, IonTabBar, IonTabButton, IonIcon, IonItem, IonLabel, IonList, IonButton, IonButtons, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonGrid, IonRow, IonCol, IonText, IonInfiniteScroll, IonInfiniteScrollContent, IonPopover } from '@ionic/angular/standalone';
import { TipsService } from 'src/app/services/tips.service';
import { RouterLinkWithHref } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';
import { DetailsTipsService } from 'src/app/services/details-tips.service';

@Component({
  selector: 'app-search-tips',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [RouterLinkWithHref,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonImg,IonSearchbar,IonTabs,IonTabBar,IonTabButton,IonIcon, IonItem,IonLabel, IonList, IonSearchbar, IonButton, ReactiveFormsModule, IonButtons, IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent,IonGrid,IonRow,IonCol,IonText,IonInfiniteScroll,IonInfiniteScrollContent,IonPopover]
})
export class SearchPage implements OnInit {

  // Array to store search results
  information: any=[];
  // Search query
  searchQuery:string='';

  constructor(private router:Router,private searchService:SearchService, private tipsService:TipsService, private detailsService:DetailsTipsService) { }

  ngOnInit(): void {
    // Retrieve search query from the search service
    this.searchQuery = this.searchService.searchQuery;
    // Fetch data for the search query from the API
    this.tipsService.searchFood(this.searchQuery).subscribe(
      (data)=>{
        // Store the search results
        this.information=data.foods;
      }
    )
  }
  // Function to navigate to the details page
  goToDetails(fdcId: string) {
    this.detailsService.fdcId = fdcId;
    this.router.navigate(['/details']);
  }

}