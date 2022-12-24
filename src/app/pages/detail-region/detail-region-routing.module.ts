import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailRegionPage } from './detail-region.page';

const routes: Routes = [
  {
    path: '',
    component: DetailRegionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailRegionPageRoutingModule {}
