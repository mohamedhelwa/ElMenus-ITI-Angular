import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Restaurants } from '../ViewModels/restaurants';
<<<<<<< HEAD
import { Reviews } from '../ViewModels/reviews';
=======
>>>>>>> 7523fe8cd85162d284ed7592c36cae778b135a43

@Injectable({
  providedIn: 'root'
})
export class RestaurantsServiceService {
  newRestaurant: AngularFirestoreCollection<Restaurants>;
<<<<<<< HEAD
  review:AngularFirestoreCollection<Reviews>;
  private dbPath = '/Restaurants';
  private reviewpath ='/Reviews';
  constructor(private db: AngularFirestore) {
    this.newRestaurant = this.db.collection(this.dbPath);
    this.review=this.db.collection(this.reviewpath);
=======
  private dbPath = '/Restaurants';
  constructor(private db: AngularFirestore) {
    this.newRestaurant = this.db.collection(this.dbPath);
>>>>>>> 7523fe8cd85162d284ed7592c36cae778b135a43

   }

   /// Add New Restaurant ///
   create(tutorial: Restaurants): any {
   
    return this.newRestaurant.add({ ...tutorial });
  }

  ///get All Restaurants ///
  getAll(): AngularFirestoreCollection<Restaurants> {
    return this.newRestaurant;
  }

<<<<<<< HEAD
  //// get All Reviews ///
  getAllReviews(): AngularFirestoreCollection<Reviews> {
    return this.review;
  }

=======
>>>>>>> 7523fe8cd85162d284ed7592c36cae778b135a43
  ///Update Restaurant ///
  //update(id: string, data: any): Promise<void> {
    update(id: string, data: Restaurants): any {
    return this.newRestaurant.doc(id).update(data);
    
  }

  ///Delete Restaurant ///
  delete(id: string): Promise<void> {
    return this.newRestaurant.doc(id).delete();
  }

}
