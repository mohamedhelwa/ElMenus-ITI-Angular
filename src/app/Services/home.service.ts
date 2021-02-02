import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class HomeService {  
  searchResult: string = '';

  constructor(private db:AngularFirestore) { }

  getAllBranches(){
    return this.db.collection('/Branches').valueChanges()
  }
  setData(restName:string,selBranch:string){
    this.searchResult = restName + selBranch;
    }

  getData():any{
      return this.searchResult;
      // console.log(this.searchResult);      
  }
}
