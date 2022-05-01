import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlineComponent } from './online.component';

const ONLINE_ROUTES: Routes = [
  {
    path: '',
    component: OnlineComponent,
    children: [
      {
        path: 'market',
        loadChildren: () => import('./views/market/market.module').then((m) => m.MarketModule),
      },
     

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(ONLINE_ROUTES)],
  exports: [RouterModule],
})
export class OnlineRoutingModule {}
