import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* Routing */
import { RoutingModule } from './routing.module';

/* Analytics */
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

/* Module */
import { ProductsModule } from './products/products.module';

/* Components */
import { AboutComponent } from './about/about.component';
import { AppComponent } from './swanaudio.component';
import { ContactComponent } from './components/contact.component';
import { PrivacyComponent } from './components/privacy.component';
import { NewsletterSignupComponent} from './components/newsletter-signup.component';
import { LandingComponent } from './components/landing.component';
import { TermsComponent } from './components/terms.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),

    ProductsModule,
  ],
  declarations: [
    AboutComponent,
    AppComponent,
    ContactComponent,
    LandingComponent,
    NewsletterSignupComponent,
    PrivacyComponent,
    TermsComponent,
  ],
  providers: [
    Title,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
