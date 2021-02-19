import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewsLayoutComponent } from './news-layout/news-layout.component';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { RegistrationComponent } from './registration/registration.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { PaymentComponent } from './payment/payment.component';
import { K2kComponent } from './k2k/k2k.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { HeaderComponent } from './nav/header/header.component';
import { FooterComponent } from './nav/footer/footer.component';
import { K2kphotosComponent } from './news-layout/k2kphotos/k2kphotos.component';
import { LadakhphotosComponent } from './news-layout/ladakhphotos/ladakhphotos.component';
import { WeddingphotosComponent } from './news-layout/weddingphotos/weddingphotos.component';
import { SpitiphotosComponent } from './news-layout/spitiphotos/spitiphotos.component';
import { CorporatephotosComponent } from './news-layout/corporatephotos/corporatephotos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { ItineraryComponent } from './itinerary/itinerary.component';

@NgModule({
  exports:[
    MatButtonModule,
    MatToolbarModule 
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NewsLayoutComponent,
    RegistrationComponent,
    PaymentComponent,
    K2kComponent,
    FirstpageComponent,
    HeaderComponent,
    FooterComponent,
    K2kphotosComponent,
    LadakhphotosComponent,
    WeddingphotosComponent,
    SpitiphotosComponent,
    CorporatephotosComponent,
    FeedbackComponent,
    ContactComponent,
    PrivacyComponent,
    OurservicesComponent,
    ItineraryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    GalleryModule,
    LightboxModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private library : FaIconLibrary)
  {
    library.addIcons(faBars,faTimes);
  }
}
