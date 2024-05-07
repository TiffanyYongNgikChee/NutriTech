import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonContent, IonHeader, IonIcon, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterLinkWithHref } from '@angular/router';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
  standalone: true,
  imports: [RouterLinkWithHref,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonChip,IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle, IonCardContent, IonTabs,IonTabBar,IonTabButton,IonIcon]
})
export class ArticlesPage implements OnInit {

  searchResult:any=[];

  constructor(private newsService:NewsService) { }

  ngOnInit() {
    this.newsService.searchNews('health').subscribe(
      (data)=>{
        this.searchResult = data.data;
      }
    )
  }
  
  nutrition(){
    this.newsService.searchNews('nutrition').subscribe(
      (data)=>{
        this.searchResult = data.data;
      }
    )
  }
  exercise(){
    this.newsService.searchNews('exercise').subscribe(
      (data)=>{
        this.searchResult = data.data;
      }
    )
  }
  wellness(){
    this.newsService.searchNews('wellness').subscribe(
      (data)=>{
        this.searchResult = data.data;
      }
    )
  }
  diet(){
    this.newsService.searchNews('diet').subscribe(
      (data)=>{
        this.searchResult = data.data;
      }
    )
  }
  mental(){
    this.newsService.searchNews('mental').subscribe(
      (data)=>{
        this.searchResult = data.data;
      }
    )
  }
  hydration(){
    this.newsService.searchNews('hydration').subscribe(
      (data)=>{
        this.searchResult = data.data;
      }
    )
  }
  sleep(){
    this.newsService.searchNews('sleep').subscribe(
      (data)=>{
        this.searchResult = data.data;
      }
    )
  }
  fitness(){
    this.newsService.searchNews('fitness').subscribe(
      (data)=>{
        this.searchResult = data.data;
      }
    )
  }
  stress(){
    this.newsService.searchNews('stress').subscribe(
      (data)=>{
        this.searchResult = data.data;
      }
    )
  }
  food(){
    this.newsService.searchNews('food').subscribe(
      (data)=>{
        this.searchResult = data.data;
      }
    )
  }

}