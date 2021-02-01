import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Restaurants } from '../../ViewModels/restaurants';

@Component({
  selector: 'app-dine-out',
  templateUrl: './dine-out.component.html',
  styleUrls: ['./dine-out.component.scss']
})
export class DineOutComponent implements OnInit {

  restaurantsList: Restaurants[] | any = [];

  constructor(private db: AngularFirestore) {
    const orders = this.db.collection('Restaurants').valueChanges();
    orders.subscribe(
      (response) => {
        this.restaurantsList = response;
        console.log(this.restaurantsList)
        // console.log("success");
      },
      (error) => {
        console.log(error);
      }
    );

  }

  ngOnInit(): void {
  }

}
