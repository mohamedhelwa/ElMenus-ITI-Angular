import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Order } from '../ViewModels/order';
import { Restaurants } from '../ViewModels/restaurants';
import { CreateOrder } from '../ViewModels/create-order';
import { User } from '../ViewModels/user';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  order: AngularFirestoreCollection<CreateOrder>;
  private orderPath = '/Orders';

  constructor(private db: AngularFirestore) {
    this.order = this.db.collection(this.orderPath);

  }

  getAll(): AngularFirestoreCollection<CreateOrder> {
    return this.order;
  }

}
