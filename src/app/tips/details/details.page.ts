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

  fdcId: any; // Variable to store the FDC ID of the food item
  information: any; // Variable to store food information
  foodDetails: any; // Variable to store detailed food information
  searchQuery: string=''; // Variable to store search query
  query:any[]=[]; // Variable to store saved queries
  showPopover: boolean = false;  // Boolean variable to control the visibility of the popover
  myPopoverEvent: Event | undefined; // Variable to store popover event

  constructor(
    private searchService:SearchService,
    private detailsService:DetailsTipsService,
    public popoverController: PopoverController,
    private storage: Storage,
    private router:Router) { }

    // Initialization
    ngOnInit(): void {
      // Get FDC ID from details service
      this.fdcId =  this.detailsService.fdcId;
      // Get food details from API
      this.detailsService.getFoodDetails(this.fdcId).subscribe(
        (data) => {
          console.log(data); // Log the response data
          this.foodDetails = data; // Store food details
        }
      );
    }
   
  // Lifecycle hook - called just before the component is displayed
   async ionViewWillEnter() {
      await this.storage.create(); // Create storage if not exists
      this.query=await this.getStorage(); // Get saved queries from storage
  }

  // Function to save query to storage
    async saveToStorage(query:string) {
      if (query.trim() != '') { // Check if query is not empty
        let savedQuery = await this.storage.get('query')||[]; // Get saved queries from storage
        savedQuery.push(query.trim()); // Add new query to saved queries
        await this.storage.set('query', savedQuery);  // Save updated queries to storage
        query = ''; // Clear query
      }
    }
    // Function to get saved queries from storage
    async getStorage(){
      return await this.storage.get('query')||[]; // Return saved queries from storage
    }
    
  }