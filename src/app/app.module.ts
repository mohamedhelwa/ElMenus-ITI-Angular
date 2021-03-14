import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { DeliveryFeaturesOrderOnlineComponent } from './Components/delivery-features-order-online/delivery-features-order-online.component';
import { GiftMealsIndividualComponent } from './Components/gift-meals-individual/gift-meals-individual.component';
import { HomeComponent } from './Components/home/home.component';
import { TestComponent } from './Components/test/test.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ResturantComponent } from './Components/resturant/resturant.component';
import { ResturantMenuComponent } from './Components/resturant-menu/resturant-menu.component';
import { ResturantInfoComponent } from './Components/resturant-info/resturant-info.component';
import { ResturantListComponent } from './Components/resturant-list/resturant-list.component';
import { ResturantReviewsComponent } from './Components/resturant-reviews/resturant-reviews.component';
import { SearchComponent } from './Components/search/search.component';
import { SearchdetailsComponent } from './Components/searchdetails/searchdetails.component';
import { AboutComponent } from './Components/about/about.component';
import { TermsComponent } from './Components/terms/terms.component';
import { PastordersComponent } from './Components/pastorders/pastorders.component';
import { PastorderdetailsComponent } from './Components/pastorderdetails/pastorderdetails.component';
import { NoordersComponent } from './Components/noorders/noorders.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DashboardOrderListComponent } from './Components/dashboard-order-list/dashboard-order-list.component';
import { MenulistDashboardComponent } from './Components/menulist-dashboard/menulist-dashboard.component';
import { ReviewDashboardComponent } from './Components/review-dashboard/review-dashboard.component';
import { CustomersDashboardComponent } from './Components/customers-dashboard/customers-dashboard.component';
import { MenuDetailsDashboardComponent } from './Components/menu-details-dashboard/menu-details-dashboard.component';
import { AddMenuDashboardComponent } from './Components/add-menu-dashboard/add-menu-dashboard.component';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';
import { LoadingComponent } from './Components/loading/loading.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { PaypalComponent } from './Components/paypal/paypal.component'

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
    AddRestaurantDashboardComponent,
    CheckoutComponent,
    DeliveryFeaturesOrderOnlineComponent,
    GiftMealsIndividualComponent,
    HomeComponent,
    TestComponent,
    PageNotFoundComponent,
    ResturantComponent,
    ResturantMenuComponent,
    ResturantInfoComponent,
    ResturantListComponent,
    ResturantReviewsComponent,
    SearchComponent,
    SearchdetailsComponent,
    AboutComponent,
    TermsComponent,
    PastordersComponent,
    PastorderdetailsComponent,
    NoordersComponent,
    DashboardOrderListComponent,
    MenulistDashboardComponent,
    ReviewDashboardComponent,
    CustomersDashboardComponent,
    MenuDetailsDashboardComponent,
    AddMenuDashboardComponent,
    AdminLoginComponent,
    LoadingComponent,
    PaymentComponent,
    PaypalComponent
  ],
  imports: [
    NgxPayPalModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    NgbModule ,//ngbootstrap
    ChartsModule,
    HttpClientModule,// for translate
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Load translation files
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

