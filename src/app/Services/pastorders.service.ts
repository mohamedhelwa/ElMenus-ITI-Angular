import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { orderData } from '../ViewModels/orderData';
import { Orderitem } from '../ViewModels/orderitem';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class PastordersService {
  ordersRef: AngularFirestoreCollection<orderData>;
  orderDoc: any;
  orders : any

  constructor(private db: AngularFirestore,
              public auth:AuthService) {
    this.ordersRef = this.db.collection('/Orders');
  }
  // getAllOrders(): AngularFirestoreCollection<Orderitem> {
  //   // return this.ordersRef;
  //  return this.db.collection('/Orders', ref => ref.where('userId', '==', localStorage.getItem('userId')));
    
  // }

  
}
