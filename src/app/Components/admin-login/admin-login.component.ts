import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AdminAuthService } from 'src/app/Services/admin-auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  constructor(public adminAuth:AdminAuthService,
              private router:Router,
              private afs:AngularFirestore) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('adminId'));
    
    if(localStorage.getItem('adminId')){
      this.afs.collection(`Admins`, ref => ref.where('uid', "==", localStorage.getItem('adminId'))).snapshotChanges().subscribe(res => {
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
    }
    
    
  }

}
