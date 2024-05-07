import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCard, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonLabel, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { RouterLinkWithHref } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collection',
  templateUrl: './collections.page.html',
  styleUrls: ['./collections.page.scss'],
  standalone: true,
  imports: [RouterLinkWithHref, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonLabel,IonContent,IonCard,IonCardHeader,IonCardTitle]
})
export class CollectionsPage implements OnInit {
  
  foodDetails:any[]=[];

  constructor(private storage: Storage,
              private router:Router) { }

  /*async ionViewWillEnter(){
    await this.storage.create();
    this.foodDetails = await this.storage.get('savedQuery') || [];
    
  }
  */
 
  ngOnInit() {
  }

  

}
