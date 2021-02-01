import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiftMealsComponent } from './Components/gift-meals/gift-meals.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { TrackOrderComponent } from './Components/track-order/track-order.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { DineOutComponent } from './Components/dine-out/dine-out.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { ChangeEmailComponent } from './Components/change-email/change-email.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { AddressBookComponent } from './Components/address-book/address-book.component';
import { DeliveryComponent } from './Components/delivery/delivery.component';
import { NoAvailableComponent } from './Components/no-available/no-available.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { OverviewDashboardComponent } from './Components/overview-dashboard/overview-dashboard.component';
import { ShowRestaurantsDashboardComponent } from './Components/show-restaurants-dashboard/show-restaurants-dashboard.component';
import { DetailsRestaurantDashboardComponent } from './Components/details-restaurant-dashboard/details-restaurant-dashboard.component';
import { AddRestaurantDashboardComponent } from './Components/add-restaurant-dashboard/add-restaurant-dashboard.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



const firebaseConfig = {
  apiKey: "AIzaSyD553sG0S5TK4x855X912d7wbMgbrxO88c",
  authDomain: "elmenus-iti.firebaseapp.com",
  projectId: "elmenus-iti",
  storageBucket: "elmenus-iti.appspot.com",
  messagingSenderId: "435500855495",
  appId: "1:435500855495:web:726c08bf16255a0e90cee2",
  measurementId: "G-W28FCKR1R3"
}

@NgModule({
  declarations: [
    AppComponent,
    GiftMealsComponent,
    HeaderComponent,
    FooterComponent,
    TrackOrderComponent,
    DineOutComponent,
    SettingsComponent,
    ChangeEmailComponent,
    ChangePasswordComponent,
    AddressBookComponent,
    DeliveryComponent,
    NoAvailableComponent,
    DashboardComponent,
    OverviewDashboardComponent,
    ShowRestaurantsDashboardComponent,
    DetailsRestaurantDashboardComponent,
    AddRestaurantDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, NgbModule // storage
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
