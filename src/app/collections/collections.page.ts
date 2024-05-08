import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonCard, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPopover, IonReorder, IonReorderGroup, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { RouterLinkWithHref } from '@angular/router';
import { Router } from '@angular/router';
import { ItemReorderEventDetail } from '@ionic/angular/standalone';

@Component({
  selector: 'app-collection',
  templateUrl: './collections.page.html',
  styleUrls: ['./collections.page.scss'],
  standalone: true,
  imports: [RouterLinkWithHref, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonLabel,IonContent,IonCard,IonCardHeader,IonCardTitle,IonList,IonReorder,IonReorderGroup,IonItem,IonButton,IonPopover]
})
export class CollectionsPage implements OnInit {
  
  public isDisabled = true;
  foodDetails:any[]=[];

  constructor(private storage: Storage,
              private router:Router) { }

  async ionViewWillEnter(){
    await this.storage.create();
    this.foodDetails = await this.storage.get('query')||[];  
  }
  
  reorderItems(event: CustomEvent<ItemReorderEventDetail>) {
    const itemMove = this.foodDetails.splice(event.detail.from, 1)[0];
    this.foodDetails.splice(event.detail.to, 0, itemMove);
    event.detail.complete();
    this.updateStorage();
  }

  toggleReorder() {
    this.isDisabled = !this.isDisabled;
  }
  deleteItem(index: number) {
    this.foodDetails.splice(index, 1);
    this.updateStorage();
  }
  
  async updateStorage() {
    await this.storage.set('query', this.foodDetails);
  }

  ngOnInit() {
  }

  

}
