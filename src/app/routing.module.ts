import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './components/contact.component';
import { LandingComponent } from './components/landing.component';

const routes: Routes = [
  { path: 'contact',  component: ContactComponent, data: {title: 'Contact Us'} },
  { path: '',         component: LandingComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})

export class RoutingModule {}
