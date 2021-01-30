import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Restaurants } from '../ViewModels/restaurants';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsServiceService {
  newRestaurant: AngularFirestoreCollection<Restaurants>;
  private dbPath = '/Restaurants';
  constructor(private db: AngularFirestore) {
    this.newRestaurant = this.db.collection(this.dbPath);

   }

   /// Add New Restaurant ///
   create(tutorial: Restaurants): any {
   
    return this.newRestaurant.add({ ...tutorial });
  }

  ///get All Restaurants ///
  getAll(): AngularFirestoreCollection<Restaurants> {
    return this.newRestaurant;
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

}
