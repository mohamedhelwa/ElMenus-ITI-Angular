import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { map } from "rxjs/operators";
import { Dishes } from "../ViewModels/dishes";

@Injectable({
  providedIn: "root",
})
export class DishesService {
  menu: AngularFirestoreCollection<Dishes>;
  private dbPath = "/Dishes";

  constructor(private db: AngularFirestore) {
    this.menu = this.db.collection(this.dbPath);
  }

  ///get All dishes ///
  getAll(): AngularFirestoreCollection<Dishes> {
    return this.menu;
  }

  updateDish(id: string, data: any): any {
    return this.menu.doc(id).update(data);    
  }

  deleteDish(id: string): any {
    return this.menu.doc(id).delete();    
  }

  addDish(data: any) {
    return this.menu.add({ ...data });
  }

  /* updateDish(id: string, value: any) {
    let doc = this.db.collection('Dishes', ref => ref.where('dishId', '==', id));
    doc.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data })
        )
      )
    ).subscribe((doc: any) => {
       let id = doc.payload.doc.id; //first result of query [0]
       this.db.doc(`Dishes/${id}`).update(value);
      })
  } */

}
