import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList, IonText, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { TipsService } from 'src/app/services/tips.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailsTipsService } from 'src/app/services/details-tips.service';
import { SearchService } from 'src/app/services/search.service';
import { RouterLinkWithHref } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [RouterLinkWithHref,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader,IonCardTitle,IonCardContent,IonList,IonItem,IonLabel,IonText,IonButtons,IonInfiniteScroll,IonInfiniteScrollContent,IonButton]
})
export class DetailsPage implements OnInit {

  fdcId: any;
  information: any;
  foodDetails: any;
  searchQuery: string='';
  DataArray: Array<string>=[];

  constructor(
    private searchService:SearchService,
    private detailsService:DetailsTipsService,
    private tipsService: TipsService,
    private storage: Storage,
    private router:Router) { }

    ngOnInit(): void {
      this.fdcId =  this.detailsService.fdcId;
      this.detailsService.getFoodDetails(this.fdcId).subscribe(
        (data) => {
          console.log(data); // Log the response data
          this.foodDetails = data;
        }
      );

    }

    saveToStorage(query:string){
      //this.storage.setItem('query', JSON.stringify(this.DataArray));
    }
   /* async ionViewWillEnter() {
      await this.storage.create();
      this.savedQuery = await this.storage.get('savedQuery') || [];
      if (this.savedQuery.length === 0) {
        console.log("Storage is empty");
      } else {
        console.log("Storage has data");
      
    }
  }

    async saveToStorage(query:string) {
        this.savedQuery.push(query.trim());
        await this.storage.set('savedQuery', this.savedQuery);
        query='';
    

    }
    */
  }