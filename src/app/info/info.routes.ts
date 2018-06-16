import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';

export const routes: Routes = [
  { path: 'about',    component: AboutComponent, data: {title: 'About Us'} },
  { path: 'terms',    component: TermsComponent, data: {title: 'Terms of Use'} },
  { path: 'privacy',  component: PrivacyComponent, data: {title: 'Privacy Policy'} },
];
