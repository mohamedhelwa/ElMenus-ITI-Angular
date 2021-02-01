import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestaurantDashboardComponent } from './Components/add-restaurant-dashboard/add-restaurant-dashboard.component';
import { AddressBookComponent } from './Components/address-book/address-book.component';
import { ChangeEmailComponent } from './Components/change-email/change-email.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { DeliveryComponent } from './Components/delivery/delivery.component';
import { DineOutComponent } from './Components/dine-out/dine-out.component';
import { GiftMealsComponent } from './Components/gift-meals/gift-meals.component';
import { NoAvailableComponent } from './Components/no-available/no-available.component';
import { OverviewDashboardComponent } from './Components/overview-dashboard/overview-dashboard.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { ShowRestaurantsDashboardComponent } from './Components/show-restaurants-dashboard/show-restaurants-dashboard.component';

const routes: Routes = [
  {path:"overviewdashboard",component:OverviewDashboardComponent},
  {path:"showrestaurants",component:ShowRestaurantsDashboardComponent},
  {path:"addrestaurant",component:AddRestaurantDashboardComponent},
  {path:"setting" , component:SettingsComponent},
  {path:"delivery" , component:DeliveryComponent},
  {path:"noonlineavailable" , component:NoAvailableComponent},
  {path:"dineout" , component:DineOutComponent},
  {path:"giftmeals" , component:GiftMealsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
