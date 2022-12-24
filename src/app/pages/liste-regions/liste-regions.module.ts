import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeRegionsPageRoutingModule } from './liste-regions-routing.module';

import { ListeRegionsPage } from './liste-regions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeRegionsPageRoutingModule
  ],
  declarations: [ListeRegionsPage]
})
export class ListeRegionsPageModule {}
