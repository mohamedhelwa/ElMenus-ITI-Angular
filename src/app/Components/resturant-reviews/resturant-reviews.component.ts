import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-resturant-reviews',
  templateUrl: './resturant-reviews.component.html',
  styleUrls: ['./resturant-reviews.component.scss','../resturant/resturant.component.scss']
})
export class ResturantReviewsComponent implements OnInit {

    reviewList:any[];

  constructor(private review:AngularFirestore) { }

  ngOnInit(): void {
    const r =this.review.collection('Reviews').valueChanges();
    r.subscribe((response) => {
      this.reviewList = response;
      console.log(this.reviewList)
    },
    (error) => {
      console.log(error);
    }
    );
  }

}
