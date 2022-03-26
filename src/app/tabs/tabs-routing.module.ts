import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'prayer/:prayerid',
        loadChildren: () =>
          import('../prayer/prayer.module').then((m) => m.PrayerPageModule),
      },
      {
        path: 'quotes',
        loadChildren: () =>
          import('../quotes/quotes.module').then((m) => m.QuotesPageModule),
      },
      {
        path: 'favourite',
        loadChildren: () =>
          import('../favourite/favourite.module').then(
            (m) => m.FavouritePageModule
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
