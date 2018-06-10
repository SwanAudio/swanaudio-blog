import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './components/contact.component';
import { LandingComponent } from './components/landing.component';
import { PrivacyComponent } from './components/privacy.component';
import { TermsComponent } from './components/terms.component';

const routes: Routes = [
  { path: 'about',    component: AboutComponent, data: {title: 'About Us'} },
  { path: 'contact',  component: ContactComponent, data: {title: 'Contact Us'} },
  { path: 'terms',    component: TermsComponent, data: {title: 'Terms of Use'} },
  { path: 'privacy',  component: PrivacyComponent, data: {title: 'Privacy Policy'} },
  { path: '',         component: LandingComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})

export class RoutingModule {}
