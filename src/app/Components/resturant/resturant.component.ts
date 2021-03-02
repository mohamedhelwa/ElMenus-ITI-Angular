import { Component, OnInit } from '@angular/core';
import { RestaurantsServiceService } from 'src/app/Services/restaurants-service.service';
import { Restaurants } from 'src/app/ViewModels/restaurants';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/ViewModels/user';

@Component({
  selector: 'app-resturant',
  templateUrl: './resturant.component.html',
  styleUrls: ['./resturant.component.scss']
})
export class ResturantComponent implements OnInit {

  restID: string = "";
  restaurantList: Restaurants[] | any;
  restaurant: Restaurants;
  userAdress:string;
  //user id 
  UserId = localStorage.getItem("userId");
  constructor(private activatedRoute: ActivatedRoute,
              private db: AngularFirestore,
              private Router : Router          
    ) {}

  ngOnInit(): void {
    console.log(this.UserId)
    this.db.collection('users').doc(this.UserId).ref.get().then((response) =>{
        let userObject:User = response.data()
        this.userAdress = userObject.address
        // console.log(response.data())
        // console.log(this.userAdress)
    }).catch(function (error) {
      console.log("There was an error getting your document:", error);
    });

    let productIDParam: string|null = this.activatedRoute.snapshot.paramMap.get('id');
    this.restID = productIDParam;
    this.getRestaurant(this.restID);
        
  }

  
  getRestaurant(id: string) {
    return this.db.collection('Restaurants').doc(id).ref.get()
      .then((doc) => {
        if (doc.exists) {
          this.restaurant = doc.data();
          // console.log(this.restaurant)
        }
        else {
          console.log("There is no document");
        }
      }).catch(function (err) {
        console.log("error !!", err);
      })

  }
  gotoUserSetings(){
    this.Router.navigate(['setting'])
  }

}
