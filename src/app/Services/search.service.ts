import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Restaurants } from '../ViewModels/restaurants';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  resturants: AngularFirestoreCollection<Restaurants>;
  constructor(private db:AngularFirestore) {
    this.resturants = this.db.collection('/Restaurants')
  }

  getAllResturants(): AngularFirestoreCollection<Restaurants> {
    return this.resturants;
  }
}
