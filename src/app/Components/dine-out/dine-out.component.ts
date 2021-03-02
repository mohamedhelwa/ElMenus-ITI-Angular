import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Restaurants } from '../../ViewModels/restaurants';
import { Router } from '@angular/router';
import { RestaurantsServiceService } from 'src/app/Services/restaurants-service.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-dine-out',
  templateUrl: './dine-out.component.html',
  styleUrls: ['./dine-out.component.scss']
})
export class DineOutComponent implements OnInit {

  restaurantsList: Restaurants[] = [];

  constructor(private route: Router, private restService: RestaurantsServiceService) {
    this.retrieveRestaurants();
  }

  ngOnInit(): void {
  }



  retrieveRestaurants(): void {
    this.restService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.restaurantsList = data;
      console.log(this.restaurantsList);
    });
  }

  goRestaurant(id: string) {
    this.route.navigate([`/restaurant/${id}/menu/` + (id)]);
  }
}
