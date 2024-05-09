import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonRow, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Browser } from '@capacitor/browser';
import { Clipboard } from '@capacitor/clipboard';
import { RouterLinkWithHref } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [RouterLinkWithHref, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonInput,IonButton,IonItem,IonLabel,IonGrid,IonRow,IonCol,IonTabs,IonTabBar,IonTabButton,IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent]
})
export class ProfilePage implements OnInit {

  lastWeekWeight: number=0;
  goalWeight: number=0;

  healthGoals: any = {
    weight: '',
    height: ''
  };
  
  
  constructor(private storage:Storage) { }

  ngOnInit() {
    this.loadHealthGoals();
  }

  async loadHealthGoals() {
    await this.storage.create();
    const goals = await this.storage.get('healthGoals');
    if (goals) {
      this.healthGoals = goals;
      this.lastWeekWeight = goals.lastWeekWeight;
      this.goalWeight = goals.goalWeight;
    }
  }

  async saveHealthGoals() {
    this.healthGoals.lastWeekWeight = this.lastWeekWeight;
    this.healthGoals.goalWeight = this.goalWeight;
    await this.storage.set('healthGoals', this.healthGoals);
  }

  calculateBMI() {
    const weight = parseFloat(this.healthGoals.weight);
    const height = parseFloat(this.healthGoals.height) / 100; // Convert height to meters
    if (weight > 0 && height > 0) {
      const bmi = weight / (height * height);
      return bmi.toFixed(1); // Round to 1 decimal place
    } else {
      return 'N/A';
    }
  }

  async openBrowser() {
    await Browser.open({ url: 'https://www.omnicalculator.com/'
    });
    };

    

}
