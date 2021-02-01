import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Order } from '../ViewModels/order';
import { Restaurants } from '../ViewModels/restaurants';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  tutorialsRef: AngularFirestoreCollection<Restaurants>;
  private dbPath = '/Restaurants';
  constructor(private db: AngularFirestore) {

    /*const orders = this.db.collection('Orders').valueChanges();
    orders.subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );*/

    this.tutorialsRef = this.db.collection(this.dbPath);

  }


  create(tutorial: Restaurants): any {
   
    return this.tutorialsRef.add({ ...tutorial });
  }

  // getAllOrders(): Observable <Order[]> {
  //   return this.http.get<Order[]>(`Orders`);
  // }
}
