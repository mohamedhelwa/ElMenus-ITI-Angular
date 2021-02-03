import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Restaurants } from '../ViewModels/restaurants';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  resturants: AngularFirestoreCollection<Restaurants>;
  constructor(private db:AngularFirestore) {
    // this.resturants = this.db.collection('/Restaurants')
    
  }

  getAllResturants(name:string,city:string): AngularFirestoreCollection<Restaurants> {
    console.log(name);
    if(name == "" || city == "") {
      return  this.resturants = this.db.collection('/Restaurants')
    }
    else {
      return this.resturants = this.db.collection('/Restaurants', ref => ref.where('restaurantName', '==', name));
    }
    
    
    
  }
}
