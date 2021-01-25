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
    DineOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
