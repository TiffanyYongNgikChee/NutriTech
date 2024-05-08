import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList, IonPopover, IonText, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { TipsService } from 'src/app/services/tips.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailsTipsService } from 'src/app/services/details-tips.service';
import { SearchService } from 'src/app/services/search.service';
import { RouterLinkWithHref } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { PopoverController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [RouterLinkWithHref,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader,IonCardTitle,IonCardContent,IonList,IonItem,IonLabel,IonText,IonButtons,IonInfiniteScroll,IonInfiniteScrollContent,IonButton,IonPopover]
})
export class DetailsPage implements OnInit {

  fdcId: any;
  information: any;
  foodDetails: any;
  searchQuery: string='';
  query:any[]=[];
  showPopover: boolean = false;
  myPopoverEvent: Event | undefined;

  constructor(
    private searchService:SearchService,
    private detailsService:DetailsTipsService,
    public popoverController: PopoverController,
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
   
   async ionViewWillEnter() {
      await this.storage.create();
      this.query=await this.getStorage();
  }

    async saveToStorage(query:string) {
      if (query.trim() != '') {
        let savedQuery = await this.storage.get('query')||[];
        savedQuery.push(query.trim());
        await this.storage.set('query', savedQuery);
        query = '';
      }
    }

    async getStorage(){
      return await this.storage.get('query')||[];
    }
    
  }