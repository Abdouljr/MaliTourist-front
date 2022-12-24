import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailRegionPageRoutingModule } from './detail-region-routing.module';

import { DetailRegionPage } from './detail-region.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailRegionPageRoutingModule
  ],
  declarations: [DetailRegionPage]
})
export class DetailRegionPageModule {}
