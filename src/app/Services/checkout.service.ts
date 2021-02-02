import { map } from 'rxjs/operators';
import { Observable } from "rxjs";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Checkout } from "./../ViewModels/checkout";
import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/firestore";
// import { environment } from 'src/environments/environment';
 
@Injectable({
  providedIn: "root",
})
export class CheckoutService {
  // private checkout: Checkout[] = [];

  usersCollection: AngularFirestoreCollection<Checkout>;
  users: Observable<Checkout[]>;
  userDoc: AngularFirestoreDocument<Checkout>|any;

  userName: string = "";
  address: string = "";
  buildingNum: string = "";
  phoneNumber: string = "";

  // users: Checkout[]=[];

  constructor(private firestore: AngularFirestore) {
    // this.users = this.firestore.collection('usersInfoTest')
    //             .valueChanges({ idField: "userId" });
    this.usersCollection = this.firestore.collection('usersInfoTest');

    //to get id of each document
    this.users = this.usersCollection.snapshotChanges()
                .pipe(map(changes =>{
                    return changes.map(a => {
                      const data = a.payload.doc.data() as Checkout;
                      data.id = a.payload.doc.id;
                      return data;
                    })
                  }))
  }

  setData(uName: string, addr: string, bNum: string, phnNum: string) {
    this.userName = uName;
    this.address = addr;
    this.buildingNum = bNum;
    this.phoneNumber = phnNum;
  }
  /* setData(data:Checkout):Observable<any> {
    const httpOptions = {headers: new HttpHeaders({
      'Content-Type': 'application/json'
        })};
        return this.http.post<any>(`${environment.API_URL}/products`,data, httpOptions);
  } */
  getData() {
    // return [this.userName, this.address, this.buildingNum, this.phoneNumber];
    return {
      userName: this.userName,
      address: this.address,
      buildingNum: this.buildingNum,
      phoneNumber: this.phoneNumber,
    };
  }

  //Deprecated
  // getUserData() {
  //   // return this.firestore.collection('usersInfoTest').snapshotChanges();
  //   return this.firestore
  //     .collection("usersInfoTest")
  //     .valueChanges({ idField: "userId" });
  // }

  getUsers(){
    return this.users;
  }

  // getUserById(id: string) {
  //   this.firestore
  //     .collection("usersInfoTest")
  //     .doc(id)
  //     .ref.get()
  //     .then(function (doc) {
  //       if (doc.exists) {
  //         console.log("Document data:", doc.data());
  //       } else {
  //         console.log("No such document!");
  //       }
  //     })
  //     .catch(function (error) {
  //       console.log("Error getting document:", error);
  //     });
  // }
  

  
  //Deprecated
/*   setUserData(form: {}) {
    this.firestore
      .collection("usersInfoTest")
      .add(form)
      .then((res) => {
        return res.id;        
        // this.getUserById(res.id);
      });
  } */
  setUserData(form: Checkout) {
    return this.usersCollection.add(form)    
  }
// db.collection('that-other-collection').doc(this.props.user.uid).collection('statements')
  getUserById(id: string) {
    // this.userDoc = this.firestore.doc(id);
    return this.usersCollection.doc(id).ref.get();
  }

    // getUserById(id: string) {
  //   this.firestore
  //     .collection("usersInfoTest")
  //     .doc(id)
  //     .ref.get()
  //     .then(function (doc) {
  //       if (doc.exists) {
  //         console.log("Document data:", doc.data());
  //       } else {
  //         console.log("No such document!");
  //       }
  //     })
  //     .catch(function (error) {
  //       console.log("Error getting document:", error);
  //     });
  // }

  // deleteUser(user: Checkout){
  //   this.userDoc = this.firestore.doc(`usersInfoTest/${user.id}`);
  //   this.userDoc.delete();
  // }
  deleteUserAddress(userId: string){
    this.userDoc = this.firestore.doc(`usersInfoTest/${userId}`);
    this.userDoc.delete();
  }

  // updateUser(user: Checkout) {
  //   this.userDoc = this.firestore.doc(`usersInfoTest/${user.id}`);
  //   this.userDoc.update(user);
  // }
  updateUserAddress(userId: string) {
    return this.firestore.doc(`usersInfoTest/${userId}`);
  }
}
