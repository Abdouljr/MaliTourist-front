import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierSupprimerPage } from './modifier-supprimer.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierSupprimerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierSupprimerPageRoutingModule {}
