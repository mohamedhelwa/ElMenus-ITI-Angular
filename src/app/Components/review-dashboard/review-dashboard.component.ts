import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { RestaurantsServiceService } from 'src/app/Services/restaurants-service.service';
import { Restaurants } from 'src/app/ViewModels/restaurants';
import { Reviews } from 'src/app/ViewModels/reviews';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-review-dashboard',
  templateUrl: './review-dashboard.component.html',
  styleUrls: ['./review-dashboard.component.scss']
})
export class ReviewDashboardComponent implements OnInit {

  reviewList: Reviews[] | any = [];
  //selectedrestaurant:Restaurants |any ;

  constructor(private reviewService:RestaurantsServiceService,
              private db:AngularFirestore) 
  {
    this.retrieveReviews();
       
   }
 
  ngOnInit(): void {
  }

  
  retrieveReviews(): void {
    this.reviewService.getAllReviews().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
       this.reviewList = data;
     // console.log(data.length);     
      //console.log(this.reviewList);
     
      })
    }

}
/*for(let i=0;i<this.reviewList.length;i++)
   {console.log(this.reviewList.restaurantId);
   this.db.collection('Restaurants').doc(this.reviewList.restaurantId).ref.get()
   .then((doc) => {
     if (doc.exists) {
       this.selectedrestaurant = doc.data();
       console.log(this.selectedrestaurant);
     }
     else {
       console.log("There is no document");
     }
   }).catch(function (err) {
     console.log("error !!", err);
   })
   
    }*/