import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { HomeComponent } from './home/home.component';
import { ItineraryComponent } from './itinerary/itinerary.component';
import { K2kComponent } from './k2k/k2k.component';
import { CorporatephotosComponent } from './news-layout/corporatephotos/corporatephotos.component';
import { K2kphotosComponent } from './news-layout/k2kphotos/k2kphotos.component';
import { LadakhphotosComponent } from './news-layout/ladakhphotos/ladakhphotos.component';
import { NewsLayoutComponent } from './news-layout/news-layout.component';
import { SpitiphotosComponent } from './news-layout/spitiphotos/spitiphotos.component';
import { WeddingphotosComponent } from './news-layout/weddingphotos/weddingphotos.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { PaymentComponent } from './payment/payment.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path:"",component: HomeComponent },
  { path:"about", component: AboutComponent},
  { path:"gallery", component:NewsLayoutComponent},
  { path:"registration", component: RegistrationComponent},
  { path:"payment", component:PaymentComponent},
  { path: "k2k", component:K2kComponent},
  { path: "gallery/corporatephotos", component: CorporatephotosComponent},
  { path: "gallery/k2kphotos", component: K2kphotosComponent},
  { path: "gallery/ladakhphotos", component: LadakhphotosComponent},
  { path:"gallery/spitiphotos", component:SpitiphotosComponent},
  { path:"gallery/weddingphotos", component: WeddingphotosComponent},
  { path:"firstpage",component: FirstpageComponent },
  { path:"contactus", component: ContactComponent},
  { path:"feedback", component: FeedbackComponent},
  { path:"privacy", component: PrivacyComponent},
  { path:"ourservices", component: OurservicesComponent},
  { path: "itinerary", component: ItineraryComponent},
  { path:"**", redirectTo:"/"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
