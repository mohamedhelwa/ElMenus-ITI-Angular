import { Component, OnInit } from '@angular/core';
import { RestaurantsServiceService } from 'src/app/Services/restaurants-service.service';
import { Restaurants } from 'src/app/ViewModels/restaurants';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-restaurants-dashboard',
  templateUrl: './show-restaurants-dashboard.component.html',
  styleUrls: ['./show-restaurants-dashboard.component.scss']
})
export class ShowRestaurantsDashboardComponent implements OnInit {
  restaurantList: Restaurants[] |any=[];
  currentrestaurant?: Restaurants;
  currentIndex = -1;
  name = '';
  constructor(private restService: RestaurantsServiceService
             , private router:Router) { }

  ngOnInit(): void {
    this.retrieveRestaurants();
  }

  refreshList(): void {
    this.currentrestaurant = undefined;
    this.currentIndex = -1;
    this.retrieveRestaurants();
  }

  retrieveRestaurants(): void {
    this.restService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.restaurantList = data;
    });
  }

  // to put data in details page //
  setActiveRestaurant(rest: Restaurants, index: number): void {
    this.currentrestaurant = rest;
    this.currentIndex = index;
  }

  
  /*addrestaurant()
  {
    this.router.navigate(['/addrestaurant']);
  }*/
}
