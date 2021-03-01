import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { Reviews } from 'src/app/ViewModels/reviews';

@Component({
  selector: 'app-resturant-reviews',
  templateUrl: './resturant-reviews.component.html',
  styleUrls: ['./resturant-reviews.component.scss','../resturant/resturant.component.scss']
})
export class ResturantReviewsComponent implements OnInit {
    addAnReivew:Reviews;
    userName ="";
    rate=1;
    comment="";
    RList:Reviews[];
    reviewList:any[];
    restID: string = "";
    UserId = localStorage.getItem("userId");

  constructor(private review:AngularFirestore,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    let productIDParam:
      | string
      | null = this.activatedRoute.snapshot.paramMap.get("id");
    this.restID = productIDParam;
    console.log(this.restID)

    const r =this.review.collection('Reviews').valueChanges();
    r.subscribe((response) => {
      this.reviewList = response;
      // console.log(this.reviewList)
    },
    (error) => {
      console.log(error);
    }
    );
  }
  addReview(){
    this.addAnReivew.restaurantId = this.restID;
    this.addAnReivew.userId = this.UserId;
    this.addAnReivew.userName = this.userName;
    this.addAnReivew.reviewRate = this.rate;
    this.addAnReivew.reviewText = this.comment;
    console.log(this.addAnReivew)
    // this.reviewList.push(this.addAnReivew)
  }

}
