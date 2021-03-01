import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/internal/operators/switchMap';
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
    review$: Observable<Reviews[]>;

    resturantId$ : BehaviorSubject<string>;
    
  constructor(private afs:AngularFirestore,
    private activatedRoute: ActivatedRoute) { 

    let productIDParam: string|null = this.activatedRoute.snapshot.paramMap.get('id');
    this.resturantId$ = new BehaviorSubject(productIDParam);
    
    
  }

  ngOnInit(): void {
    this.review$ = this.resturantId$.pipe(
      switchMap(restId =>
        this.afs.collection<Reviews>('Reviews', ref => ref.where('restaurantId', '==', restId)).valueChanges()
      )
    )
    console.log(this.review$);
    
    this.review$.subscribe(reviews =>{
      this.reviewList = reviews
      
    })
    console.log(this.reviewList)
  //   restID: string = "";
  //   UserId = localStorage.getItem("userId");

  // constructor(private review:AngularFirestore,private activatedRoute: ActivatedRoute) { }

  // ngOnInit(): void {

  //   let productIDParam:
  //     | string
  //     | null = this.activatedRoute.snapshot.paramMap.get("id");
  //   this.restID = productIDParam;
  //   console.log(this.restID)

  //   const r =this.review.collection('Reviews').valueChanges();
  //   r.subscribe((response) => {
  //     this.reviewList = response;
  //     // console.log(this.reviewList)
  //   },
  //   (error) => {
  //     console.log(error);
  //   }
  //   );
  // }
  }
  // addReview(){
  //   this.addAnReivew.restaurantId = this.restID;
  //   this.addAnReivew.userId = this.UserId;
  //   this.addAnReivew.userName = this.userName;
  //   this.addAnReivew.reviewRate = this.rate;
  //   this.addAnReivew.reviewText = this.comment;
  //   console.log(this.addAnReivew)
  //   // this.reviewList.push(this.addAnReivew)
  // }

}
