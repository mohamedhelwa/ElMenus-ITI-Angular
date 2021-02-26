import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { AddRestaurantDashboardComponent } from './Components/add-restaurant-dashboard/add-restaurant-dashboard.component';
import { AddressBookComponent } from './Components/address-book/address-book.component';
import { ChangeEmailComponent } from './Components/change-email/change-email.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { DeliveryFeaturesOrderOnlineComponent } from './Components/delivery-features-order-online/delivery-features-order-online.component';
import { DeliveryComponent } from './Components/delivery/delivery.component';
import { DineOutComponent } from './Components/dine-out/dine-out.component';
import { GiftMealsIndividualComponent } from './Components/gift-meals-individual/gift-meals-individual.component';
import { GiftMealsComponent } from './Components/gift-meals/gift-meals.component';
import { HomeComponent } from './Components/home/home.component';
import { NoAvailableComponent } from './Components/no-available/no-available.component';
import { OverviewDashboardComponent } from './Components/overview-dashboard/overview-dashboard.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ResturantInfoComponent } from './Components/resturant-info/resturant-info.component';
import { ResturantListComponent } from './Components/resturant-list/resturant-list.component';
import { ResturantMenuComponent } from './Components/resturant-menu/resturant-menu.component';
import { ResturantReviewsComponent } from './Components/resturant-reviews/resturant-reviews.component';
import { ResturantComponent } from './Components/resturant/resturant.component';
import { PastordersComponent } from './Components/pastorders/pastorders.component';
import { SearchComponent } from './Components/search/search.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { ShowRestaurantsDashboardComponent } from './Components/show-restaurants-dashboard/show-restaurants-dashboard.component';
import { TermsComponent } from './Components/terms/terms.component';
import { TestComponent } from './Components/test/test.component';
import { TrackOrderComponent } from './Components/track-order/track-order.component';
import { AuthGuard } from './Services/auth.guard';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DashboardOrderListComponent } from './Components/dashboard-order-list/dashboard-order-list.component';
import { MenulistDashboardComponent } from './Components/menulist-dashboard/menulist-dashboard.component';
import { ReviewDashboardComponent } from './Components/review-dashboard/review-dashboard.component';
import { CustomersDashboardComponent } from './Components/customers-dashboard/customers-dashboard.component';
import { AddMenuDashboardComponent } from './Components/add-menu-dashboard/add-menu-dashboard.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' }, // default path 
  // { path: "overviewdashboard", component: OverviewDashboardComponent },
  // { path: "showrestaurants", component: ShowRestaurantsDashboardComponent },
  // { path: "addrestaurant", component: AddRestaurantDashboardComponent },
  { path: "setting", component: SettingsComponent },
  { path: "delivery", component: DeliveryComponent },
  { path: "noonlineavailable", component: NoAvailableComponent },
  { path: "dineout", component: DineOutComponent },
  { path: "giftmeals", component: GiftMealsComponent },
  { path: "trackOrder", component: TrackOrderComponent },
  { path: 'Checkout', component: CheckoutComponent },
  { path: 'Giftmeals-individual', component: GiftMealsIndividualComponent },
  { path: 'Delivery2', component: DeliveryFeaturesOrderOnlineComponent },
  { path: "myorders", component: PastordersComponent },
  // { path: "search", component: SearchComponent , canActivate:[AuthGuard]},
  { path: "search", component: SearchComponent},
  { path: "about", component: AboutComponent },
  { path: "terms", component: TermsComponent },
  { path: 'Test', component: TestComponent },
  // { path: "orderlist", component: DashboardOrderListComponent},
  // { path: "menulist", component: MenulistDashboardComponent},
  // { path: "reviewlist", component: ReviewDashboardComponent},
  // { path: "customerlist", component:CustomersDashboardComponent },
  // { path: "addMenu", component:AddMenuDashboardComponent },

  { path: 'dashboard', component: OverviewDashboardComponent },
  { path: "showrestaurants", component: ShowRestaurantsDashboardComponent },
  { path: "addrestaurant", component: AddRestaurantDashboardComponent },
  { path: "orderlist", component: DashboardOrderListComponent},
  { path: "menulist", component: MenulistDashboardComponent},
  { path: "reviewlist", component: ReviewDashboardComponent},
  { path: "customerlist", component:CustomersDashboardComponent },
  { path: "addMenu", component:AddMenuDashboardComponent },
  



  {
    path: 'restaurant/:id', component: ResturantComponent,
    children: [
      { path: 'menu/:id', component: ResturantMenuComponent },//menu
      { path: 'info/:id', component: ResturantInfoComponent },//info
      { path: 'list/:id', component: ResturantListComponent },//list of resturants
      { path: 'reviews/:id', component: ResturantReviewsComponent }//reviews
    ]
  },
  { path: '**', component: PageNotFoundComponent }  // Wildcard route for a 404 page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
