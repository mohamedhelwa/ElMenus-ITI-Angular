import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Order } from '../ViewModels/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private db: AngularFirestore, private http: HttpClient) {

    const orders = this.db.collection('Orders').valueChanges();
    orders.subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );

  }

  // getAllOrders(): Observable <Order[]> {
  //   return this.http.get<Order[]>(`Orders`);
  // }
}
