import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Restaurants } from '../ViewModels/restaurants';
import { Reviews } from '../ViewModels/reviews';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsServiceService {
  newRestaurant: AngularFirestoreCollection<Restaurants>;
  review:AngularFirestoreCollection<Reviews>;
  private dbPath = '/Restaurants';
  private reviewpath ='/Reviews';
  constructor(private db: AngularFirestore) {
    this.newRestaurant = this.db.collection(this.dbPath);
    this.review=this.db.collection(this.reviewpath);

   }

   /// Add New Restaurant ///
   create(tutorial: Restaurants): any {
   
    return this.newRestaurant.add({ ...tutorial });
  }

  ///get All Restaurants ///
  getAll(): AngularFirestoreCollection<Restaurants> {
    return this.newRestaurant;
  }

  //// get All Reviews ///
  getAllReviews(): AngularFirestoreCollection<Reviews> {
    return this.review;
  }

  ///Update Restaurant ///
  //update(id: string, data: any): Promise<void> {
    update(id: string, data: Restaurants): any {
    return this.newRestaurant.doc(id).update(data);
    
  }

  ///Delete Restaurant ///
  delete(id: string): Promise<void> {
    return this.newRestaurant.doc(id).delete();
  }

  // getRestaurantById() {

  // }
}
