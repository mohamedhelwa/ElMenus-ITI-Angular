import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Orderitem } from '../ViewModels/orderitem';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PastordersService {
  ordersRef: AngularFirestoreCollection<Orderitem>;
  orderDoc: any;

  constructor(private db: AngularFirestore,
              public auth:AuthService) {
    this.ordersRef = this.db.collection('/Orders');
  }
  getAllOrders(): AngularFirestoreCollection<Orderitem> {
    // return this.ordersRef;
    return this.ordersRef = this.db.collection('/Orders', ref => ref.where('userId', '==', this.auth.getUid()));
  }

  
}
