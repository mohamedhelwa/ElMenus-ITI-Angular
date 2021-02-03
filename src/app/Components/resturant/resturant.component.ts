import { Component, OnInit } from '@angular/core';
import { RestaurantsServiceService } from 'src/app/Services/restaurants-service.service';
import { Restaurants } from 'src/app/ViewModels/restaurants';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-resturant',
  templateUrl: './resturant.component.html',
  styleUrls: ['./resturant.component.scss']
})
export class ResturantComponent implements OnInit {

  restID: string = "";
  restaurantList: Restaurants[] | any;
  restaurant: any;
  constructor(private list:RestaurantsServiceService,
              private activatedRoute: ActivatedRoute,
              private db: AngularFirestore          
    ) {}

  ngOnInit(): void {

    // const d = this.db.collection('Restaurants').valueChanges();
    // d.subscribe(
    //   (response) => {
    //     this.restaurantList = response;
    //     // console.log(this.menu)
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );

    let productIDParam: string|null = this.activatedRoute.snapshot.paramMap.get('id');
    this.restID = productIDParam;
    this.getRestaurant(this.restID);
    
//    this.restaurantList = this.db.collection('/Restaurants', ref => ref.where('restaurantId', '==', this.restID));

    
  }

  
  getRestaurant(id: string) {
    return this.db.collection('Restaurants').doc(id).ref.get()
      .then((doc) => {
        if (doc.exists) {
          this.restaurant = doc.data();
          // console.log(this.restaurant);
        }
        else {
          console.log("There is no document");
        }
      }).catch(function (err) {
        console.log("error !!", err);
      })

  }

}
