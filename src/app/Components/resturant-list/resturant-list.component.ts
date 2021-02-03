import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Restaurants } from 'src/app/ViewModels/restaurants';

@Component({
  selector: 'app-resturant-list',
  templateUrl: './resturant-list.component.html',
  styleUrls: ['./resturant-list.component.scss','../resturant/resturant.component.scss']
})
export class ResturantListComponent implements OnInit {
  list:Restaurants | any ;
  workOpen:string;
  WrokClose:string;
  branch:any[];
  
  constructor(private db:AngularFirestore) { }

  ngOnInit(): void {
    const d = this.db.collection('Restaurants').valueChanges();
    d.subscribe(
      (response) => {
        this.list = response;
        console.log(this.list)
        this.branch = this.list[0].restaurantBranchs
        this.workOpen = this.list[0].restaurantOpening;
        this.WrokClose = this.list[0].restaurantClosing;
        console.log(this.list[0].restaurantBranchs)
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
