import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  loginForm = this.FB.group({
    email: ["", [
      Validators.required,
      Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"),//^[a-zA-Z_ ]{3,}$
              ],
  ],

  pass: ["", [
    Validators.required,
    Validators.pattern(".{6,}"),//^[a-zA-Z_ ]{3,}$
            ],
],
});
  constructor(public auth:AuthService,
              private router:Router,
              private afs:AngularFirestore,
              private FB :FormBuilder) { }

  ngOnInit(): void {
    
  }

}
