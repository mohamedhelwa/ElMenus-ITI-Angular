import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Dishes } from '../ViewModels/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishesService {
  menu: AngularFirestoreCollection<Dishes>;
  private dbPath = '/Dishes';

  constructor(private db: AngularFirestore) 
  {
    this.menu = this.db.collection(this.dbPath);
    }

     ///get All dishes ///
   getAll(): AngularFirestoreCollection<Dishes> {
    return this.menu;
  }

}
