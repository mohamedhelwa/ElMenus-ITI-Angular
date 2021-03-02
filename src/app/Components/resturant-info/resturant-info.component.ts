import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Restaurants } from 'src/app/ViewModels/restaurants';

@Component({
  selector: 'app-resturant-info',
  templateUrl: './resturant-info.component.html',
  styleUrls: ['./resturant-info.component.scss','../resturant/resturant.component.scss']
})
export class ResturantInfoComponent implements OnInit {

  returantBrnches=[''];
  workOpen:string;
  WrokClose:string;
  resturantAddress:string;
  featuredPhotos:string[];
  resturantPhone : string;
  restID: string = "";
  resturant:Restaurants;

  constructor(private db:AngularFirestore,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let productIDParam:
      | string
      | null = this.activatedRoute.snapshot.paramMap.get("id");
    this.restID = productIDParam;
    
    this.db.collection('Restaurants').doc(this.restID).ref.get().then((response) =>{
      this.resturant = response.data();
      this.resturantPhone = this.resturant.restaurantPhone;
      this.returantBrnches = this.resturant.restaurantBranchs;
      this.workOpen = this.resturant.restaurantOpening;
      this.WrokClose = this.resturant.restaurantClosing;
      this.featuredPhotos = this.resturant.restaurantFeaturedPhotos;
      this.resturantAddress = this.resturant.adress;      

      console.log(this.resturant)
    }).catch(function (error) {
      console.log("There was an error getting your document:", error);
    });


  }

}
