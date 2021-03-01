import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Admin } from '../ViewModels/admin';
import { User } from '../ViewModels/user';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  admin$: Observable<Admin>;
  adminId: string;

  constructor(private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router) {
    // Get the auth state, then fetch the Firestore user document or return null
    this.admin$ = this.afAuth.authState.pipe(
      switchMap(admin => {
        // Logged in
        if (admin) {
          this.adminId = admin.uid;
          localStorage.setItem("adminId", admin.uid);
          console.log(admin.uid)
          return this.afs.doc<Admin>(`Admins/${admin.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    )
  }

  getAdminUid(){
    return localStorage.getItem("adminUid");
  }

  adminSignIn(email: string, password: string) {
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
        this.afs.collection(`Admins`, ref => ref.where('uid', "==", res.user.uid)).snapshotChanges().subscribe(res => {
          if (res.length > 0)
          {
          this.router.navigate(['/dashboard']);
          console.log("Match found.");
          }
          else
          {
          console.log("Does not exist.");
          }
        });
        
      })
      .catch(err => {
        //code: "auth/user-not-found"
        alert(err.message)
        console.log('Something is wrong:', err.message);
      });
  }

  // updateUserData(user) {
  //   // Sets user data to firestore on login
  //   const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

  //   const data = {
  //     uid: user.uid,
  //     email: user.email,
  //     displayName: user.displayName,
  //     photoURL: user.photoURL
  //   }

  //   return userRef.set(data, { merge: true })

  // }

  signOut() {
    // localStorage.removeItem("userId")
    // localStorage.removeItem("elmenus_cart")
    // localStorage.removeItem("order_data")
    localStorage.clear();
    this.afAuth.signOut();
  }


}
