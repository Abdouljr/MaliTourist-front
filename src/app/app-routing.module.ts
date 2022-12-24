import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'liste-regions',
    loadChildren: () => import('./pages/liste-regions/liste-regions.module').then( m => m.ListeRegionsPageModule)
  },
  {
    path: 'detail-region/:id',
    loadChildren: () => import('./pages/detail-region/detail-region.module').then( m => m.DetailRegionPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'commentaire/:id',
    loadChildren: () => import('./pages/commentaire/commentaire.module').then( m => m.CommentairePageModule)
  },
  {
    path: 'modifier-ajouter/:type',
    loadChildren: () => import('./pages/modifier-supprimer/modifier-supprimer.module').then( m => m.ModifierSupprimerPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
