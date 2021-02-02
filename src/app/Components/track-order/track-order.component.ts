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
        //console.log(this.ordersList[1])
        // console.log("success");
      },
      (error) => {
        console.log(error);
      }
    );


    // db.collection('Orders').doc("WRQlvFUcx3PIgL8hZnfh").ref.get()
    // .then(function (doc) {
    //   if (doc.exists) {
    //     console.log(doc.data());
    //   } else {
    //     console.log("There is no document!");
    //   }
    // }).catch(function (error) {
    //   console.log("There was an error getting your document:", error);
    // });

  }

  ngOnInit(): void {
  }

}
