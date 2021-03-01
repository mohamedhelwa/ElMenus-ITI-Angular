import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Restaurants } from 'src/app/ViewModels/restaurants';

@Component({
  selector: 'app-resturant-list',
  templateUrl: './resturant-list.component.html',
  styleUrls: ['./resturant-list.component.scss','../resturant/resturant.component.scss']
})
export class ResturantListComponent implements OnInit {
  returantBrnches = [];
  workOpen:string;
  WrokClose:string;
  restID: string = "";
  resturnt:Restaurants;
  
  constructor(private db:AngularFirestore,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let productIDParam:
      | string
      | null = this.activatedRoute.snapshot.paramMap.get("id");
    this.restID = productIDParam;
    
    this.db.collection('Restaurants').doc(this.restID).ref.get().then((response) =>{
      this.resturnt = response.data();
      console.log(this.resturnt.restaurantBranchs)
      this.returantBrnches = this.resturnt.restaurantBranchs;
      this.workOpen = this.resturnt.restaurantOpening;
      this.WrokClose = this.resturnt.restaurantClosing;
    }).catch(function (error) {
      console.log("There was an error getting your document:", error);
    });}
}
