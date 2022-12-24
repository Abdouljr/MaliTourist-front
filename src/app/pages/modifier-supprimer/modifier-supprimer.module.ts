import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierSupprimerPageRoutingModule } from './modifier-supprimer-routing.module';

import { ModifierSupprimerPage } from './modifier-supprimer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierSupprimerPageRoutingModule
  ],
  declarations: [ModifierSupprimerPage]
})
export class ModifierSupprimerPageModule {}
