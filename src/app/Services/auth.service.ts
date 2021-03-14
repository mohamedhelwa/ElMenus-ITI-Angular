import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../ViewModels/user'; // optional
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of, pipe } from 'rxjs';
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
          localStorage.setItem('userId',user.uid);
          // return user document
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        else {
          return of(null);
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
        this.setUserData(res.user.uid, name, email, { normalUser: true, admin: false });
        console.log('You are Successfully signed up!', res.user.uid);
      })
      .catch(error => {
        console.log('Something is wrong:', error.message);
      });
  }

  setUserData(uid: string, name: string, email: string, roles: any) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);
    const data = {
      uid: uid,
      email: email,
      name: name,
      roles: roles
    }
    userRef.set(data, { merge: true })
    localStorage.setItem('userId',uid);

    return userRef.update({ address: "Cairo" });
  }

  signInAdmin(email: string, password: string) {
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('You are Successfully logged in!');
        console.log(res);
        let userId = res.user.uid;
        this.afs.collection('users').doc(userId).ref.get().then((doc) =>{
          let user:User = doc.data();
          if(user.roles.admin){
          localStorage.setItem('userId',user.uid);
          this.router.navigate(['/dashboard'])
          }
          else{
            console.log('access denied')
          }
        }
        )
      })
      .catch(err => {
        //code: "auth/user-not-found"
        alert(err.message)
        console.log('Something is wrong:', err.message);
      });
  }

  signIn(email: string, password: string) {
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('You are Successfully logged in!');
        console.log(res);
        let userId = res.user.uid;
        localStorage.setItem('userId',res.user.uid);
      })
      .catch(err => {
        //code: "auth/user-not-found"
        alert(err.message)
        console.log('Something is wrong:', err.message);
      });
  }
  // can login to admin
  isAdmin(user: User): boolean {
    const allowed = ['admin']
    return this.checkAuthorization(user, allowed)
  }
  // can login to user
  isUser(user: User): boolean {
    const allowed = ['normalUser']
    return this.checkAuthorization(user, allowed)
  }

  // determines if user has matching role
  private checkAuthorization(user: User, allowedRoles: string[]): boolean {
    if (!user) return false
    for (const role of allowedRoles) {
      if (user.roles[role]) {
        return true
      }
    }
    return false
  }
  
  

  signOut() {
    // localStorage.removeItem("userId")
    // localStorage.removeItem("elmenus_cart")
    // localStorage.removeItem("order_data")
    localStorage.clear();
    this.afAuth.signOut();
  }
}
