import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLinkWithHref } from '@angular/router';
import { Router } from '@angular/router';
import { NewsService } from '../services/news.service';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem,IonMenuButton,IonAvatar, IonButton, IonIcon, IonGrid, IonRow, IonCol, IonLabel, IonNote, IonChip, IonText, IonThumbnail, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonList, IonMenu, IonButtons, IonSearchbar} from '@ionic/angular/standalone';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLinkWithHref, IonHeader, IonToolbar, IonTitle, IonContent, IonItem,IonMenuButton,IonAvatar, IonButton, IonIcon,IonGrid,IonRow,IonCol,IonLabel,IonNote,IonChip,IonText,IonThumbnail,IonCard,IonCardHeader,IonCardContent,IonCardSubtitle,IonCardTitle, IonList,IonMenuButton,IonToolbar, IonButtons,IonMenu, IonSearchbar, IonIcon],
})
export class HomePage implements OnInit{
  news: any=[];

  features: any[] = [
    {id: 1, name:'Recipe', src: 'assets/icon/recipe-book.png', page:''},
    {id: 2, name:'NutritionTip', src: 'assets/icon/idea.png', page:''},
    {id: 3, name:'News', src: 'assets/icon/newspaper.png', page:''},
    {id: 4, name:'UserProfile', src: 'assets/icon/two-people.png', page:''},
  ];

  constructor(private newsService:NewsService) {}

  ngOnInit() {
    this.newsService.getNews().subscribe(
    (data)=>{
    this.news = data.data;
    }
    );
    }
}