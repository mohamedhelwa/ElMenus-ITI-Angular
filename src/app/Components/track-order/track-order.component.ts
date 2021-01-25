import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Order } from '../../ViewModels/order';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrls: ['./track-order.component.scss']
})
export class TrackOrderComponent implements OnInit {


  ordersList: Order[] | any = [];

  constructor(private db: AngularFirestore) {
    const orders = this.db.collection('Orders').valueChanges();
    orders.subscribe(
      (response) => {
        this.ordersList = response;
        console.log(this.ordersList)
        console.log("success");
      },
      (error) => {
        console.log(error);
      }
    );

  }

  ngOnInit(): void {
  }

}
