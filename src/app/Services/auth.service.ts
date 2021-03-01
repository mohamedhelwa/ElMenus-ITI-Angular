import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { User } from '../ViewModels/user'; // optional

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user$: Observable<User>;
  userId: string;
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    // Get the auth state, then fetch the Firestore user document or return null
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user) {
          console.log(user.uid);
          
          this.afs.collection(`users`, ref => ref.where('uid', "==", user.uid))
          .snapshotChanges().subscribe(res => {
            if (res.length > 0) {
              this.userId = user.uid;
              localStorage.setItem("userId", user.uid);
              console.log(user.uid)
              
              console.log("Match found.");
            }
            else {
              console.log("Does not exist.");
              this.afAuth.signOut();
              this.afAuth.currentUser = null;
              this.signOut()
              localStorage.clear();
            }
          });
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        else{
          return null;
        }
        
      })
    )
  }
  getUid() {
    return localStorage.getItem("userId");
  }
  signUp(email: string, password: string, name: string) {
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        this.setUserData(res.user.uid, name, email);
        console.log('You are Successfully signed up!', res.user.uid);
      })
      .catch(error => {
        console.log('Something is wrong:', error.message);
      });
  }

  signIn(email: string, password: string) {
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('You are Successfully logged in!');
        console.log(res);
        let userId = res.user.uid;
        this.afs.collection(`users`, ref => ref.where('uid', "==", res.user.uid)).snapshotChanges().subscribe(res => {
          if (res.length > 0) {
            localStorage.setItem("userId", userId);
            console.log(userId)
              
            console.log("Match found.");
          }
          else {
            console.log("Does not exist.");
              this.afAuth.signOut();
              this.afAuth.currentUser = null;
              this.signOut()
              localStorage.clear();
          }
        });
      })
      .catch(err => {
        //code: "auth/user-not-found"

        alert(err.message)
        console.log('Something is wrong:', err.message);
      });
  }

  setUserData(uid: string, name: string, email: string) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);
    const data = {
      uid: uid,
      email: email,
      name: name,
    }
    userRef.set(data, { merge: true })

    return userRef.update({ address: "Cairo" });
  }

  updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }

    return userRef.set(data, { merge: true })

  }

  signOut() {
    // localStorage.removeItem("userId")
    // localStorage.removeItem("elmenus_cart")
    // localStorage.removeItem("order_data")
    localStorage.clear();
    this.afAuth.signOut();
  }
}
