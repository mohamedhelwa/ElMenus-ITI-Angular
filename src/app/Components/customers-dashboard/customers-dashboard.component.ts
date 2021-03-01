import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/ViewModels/user';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-customers-dashboard',
  templateUrl: './customers-dashboard.component.html',
  styleUrls: ['./customers-dashboard.component.scss']
})
export class CustomersDashboardComponent implements OnInit {
  customersList: User[] | any = [];
  constructor(private db: AngularFirestore) 
  {
    const users = this.db.collection('users').valueChanges();
    users.subscribe(
      (response) => {
        this.customersList = response;
      },
      (error) => {
        console.log(error);
      }
    );

   }

  ngOnInit(): void {
  }

}
