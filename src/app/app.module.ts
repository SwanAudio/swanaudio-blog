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
import { InfoModule  } from './info/info.module';

/* Components */
import { AppComponent } from './swanaudio.component';
import { ContactComponent } from './components/contact.component';
import { NewsletterSignupComponent} from './components/newsletter-signup.component';
import { LandingComponent } from './components/landing.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    Angulartics2Module.forRoot([Angulartics2GoogleAnalytics]),

    ProductsModule,
    InfoModule,

    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
  ],
  declarations: [
    AppComponent,
    ContactComponent,
    LandingComponent,
    NewsletterSignupComponent,
  ],
  providers: [
    Title,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
