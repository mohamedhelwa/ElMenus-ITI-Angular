import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Orderitem } from '../ViewModels/orderitem';

@Injectable({
  providedIn: 'root'
})
export class PastordersService {
  ordersRef: AngularFirestoreCollection<Orderitem>;
  orderDoc: any;

  constructor(private db: AngularFirestore) {
    this.ordersRef = this.db.collection('/Orders');
  }
  getAllOrders(): AngularFirestoreCollection<Orderitem> {
    return this.ordersRef;
  }

  
}
