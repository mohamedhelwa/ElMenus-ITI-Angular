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
    restID: string = "";
    UserId = localStorage.getItem("userId");

    reviewList:Reviews[];
    review$: Observable<Reviews[]>;
    resturantId$ : BehaviorSubject<string>;
    
  constructor(private afs:AngularFirestore,
    private activatedRoute: ActivatedRoute) { 

    let productIDParam: string|null = this.activatedRoute.snapshot.paramMap.get('id');
    this.resturantId$ = new BehaviorSubject(productIDParam);
    
    this.restID = productIDParam;

    console.log(this.restID)
    console.log(this.UserId)
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
    // console.log(this.reviewList)
  }

  addReview(){
    this.addAnReivew = {
      restaurantId:this.restID,
      userId:this.UserId,
      userName: this.userName,
      reviewRate:this.rate,
      reviewText:this.comment
    }
    // console.log(this.addAnReivew)
    this.afs.collection('Reviews').add({...this.addAnReivew}).then(()=> console.log('sucsses'))
  }

}
