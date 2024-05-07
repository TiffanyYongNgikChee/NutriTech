import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'tips',
    loadComponent: () => import('./tips/tips.page').then( m => m.TipsPage)
  },
  {
    path: 'search',
    loadComponent: () => import('./tips/search/search.page').then( m => m.SearchPage)
  },
  {
    path: 'details',
    loadComponent: () => import('./tips/details/details.page').then( m => m.DetailsPage)
  },
  {
    path: 'articles',
    loadComponent: () => import('./articles/articles.page').then( m => m.ArticlesPage)
  },
  {
    path: 'collections',
    loadComponent: () => import('./collections/collections.page').then( m => m.CollectionsPage)
  },
];
