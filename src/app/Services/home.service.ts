import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class HomeService {
  // searchResult: string = '';
  // restName:string = '';
  // selBranch:string = '';
  searchInputs = [];
  restName: string = "";
  selBranch: string = "";

  constructor(private db: AngularFirestore) {}

  getAllBranches() {
    return this.db.collection("/Branches").valueChanges();
  }
  setData(restName: string, selBranch: string) {
    /* this.restaurant['restName'] = restName;
    this.restaurant['selBranch'] = selBranch;
    this.searchInputs.push(this.restaurant) */
    this.restName = restName;
    this.selBranch = selBranch;
  }

  getData(): any {
    const result = this.searchInputs.map((restaurant) => {
      // console.log(restaurant)
      // console.log(`restaurantName: ${restaurant.restName} ,, selectedBranch: ${restaurant.selBranch}`)
      //  JSON.stringify(restaurant)
    });
    return result;
  }
}
