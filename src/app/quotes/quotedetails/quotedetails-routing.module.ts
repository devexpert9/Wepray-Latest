import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuotedetailsPage } from './quotedetails.page';

const routes: Routes = [
  {
    path: '',
    component: QuotedetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuotedetailsPageRoutingModule {}
