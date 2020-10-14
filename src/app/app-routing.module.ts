import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {AboutComponent} from './component/about/about.component';
import {ContactComponent} from './component/contact/contact.component';
import {PageNotFoundComponent} from './component/page-not-found/page-not-found.component';
import {EconomyCarsComponent} from './component/economy-cars/economy-cars.component';
import {EcoCombiComponent} from './component/eco-combi/eco-combi.component';
import {LuxuryCarsComponent} from './component/luxury-cars/luxury-cars.component';
import {LamborginiComponent} from './component/lamborgini/lamborgini.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'economy-cars',
    component: EconomyCarsComponent
  },
  {
    path: 'luxury-cars',
    component: LuxuryCarsComponent
  },
  {
    path: 'eco-combi',
    component: EcoCombiComponent
  },
  {
    path: 'lamborgini',
    component: LamborginiComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
