import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Restaurants } from 'src/app/ViewModels/restaurants';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { OrdersService } from 'src/app/Services/orders.service';
import { RestaurantsServiceService } from 'src/app/Services/restaurants-service.service';
import { Reviews } from 'src/app/ViewModels/reviews';
@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {

  restaurantList: Restaurants[] | any = [];
  reviewsList: Reviews[] | any = [];
  checked=false;
  number_of_restaurants=0;

  constructor(private restService:RestaurantsServiceService,private db: AngularFirestore ,  private router:Router) {
    /*const orders = this.db.collection('Restaurants').valueChanges();
    orders.subscribe(
      (response) => {
        this.restaurantList = response;
        console.log(this.restaurantList)
        console.log("success");
       
        console.log(this.restaurantList.length);
        this.number_of_restaurants=this.restaurantList.length;
      },
      (error) => {
        console.log(error);
      }
    );*/ 

    /*this.tutorial.restaurantName="pizza Hut";
    this.tutorial.restaurantClosingTime="11.00";
    this.tutorial.restaurantOpiningTime="09.00";
    this.tutorial.restaurantPhone="11090";
    this.tutorial.restaurantType="pizza";
    this.tutorial.restaurantBranches=["cairo","sharmElshiekh"];
    this.tutorial.restaurantFeaturedPhotos=["url"];*/
    this.retrieveRestaurants();
    this.retrieveReviews();

  }

  ngOnInit(): void {
  }

  retrieveRestaurants(): void {
    this.restService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.restaurantList = data;
     // console.log(data.length);
     this.number_of_restaurants=this.restaurantList.length;
     
     console.log(this.restaurantList);

    });
  }


  retrieveReviews(): void {
    this.restService.getAllReviews().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.reviewsList = data;
     // console.log(data.length);
    // this.number_of_restaurants=this.restaurantList.length;
     
     console.log(this.reviewsList);
     console.log(this.restaurantList);

     for(let i=0;i<this.reviewsList.length;i++)
     {
      // if(this.reviewsList.restaurantId===this.restaurantList.id)
      if(this.reviewsList[i].restaurantId.localeCompare(this.restaurantList[i].id)===0) 
      {
         console.log(this.reviewsList[i].restaurantId + " "+this.restaurantList[i].id)
         this.restaurantList[i].reviews=this.reviewsList[i].reviewRate;
        }
       else
       {
         console.log("false");
         this.restaurantList[i].reviews=0;
       }
     }
     console.log(this.restaurantList);
    });
  }


  onChange(checked:boolean)
  {
    if(checked)
    {
      this.router.navigate(['/noonlineavailable']);
    }
   
  }

  cll()
  {

    /*this.ord.create(this.tutorial).then(() => {
      console.log('Created new item successfully!');
     // this.submitted = true;
    });
*/
    /**********************/
   /* const tutRef = this.db.doc('Restaurants');
 
// set() for destructive updates
    tutRef.set({ restaurantBranchs: ['cairo','sharmElshiekh']
                ,restaurantClosing:"11.00"
                ,restaurantFeaturedPhotos:"url"
                ,restaurantName:"pizza Hut"
                ,restaurantOpening:"09.00"
                ,restaurantPhone:"11909"
                ,restaurantType:"pizza"});
      console.log("done");*/
   /*for(let i =0;i<5;i++)
   {
    let x = document.createElement("SPAN");
  let t = document.createTextNode("");
  x.setAttribute("id", `Div+${i}`);
  x.className="fa fa-star";
  //var element = document.getElementById("myDIV");
  //element.classList.add("mystyle");
  //listItem.className = 'someClassName';
  x.appendChild(t);
  document.body.appendChild(x);
document.getElementById(`Div+${i}`).style.color="orange";
   }*/

    /////////////////
    
    //this.restaurantList = this.db.collection('Restaurants');
   // const coll:AngularFirestoreCollection<Restaurants>;
    /*const ll:AngularFirestoreCollection<Restaurants>;
return ll.snapshotChanges().map((actions:any) => {
  return actions.map((a:any) => {
    //const data = a.payload.doc.data();
    //const id = a.payload.doc.id;
    const data = a.payload.doc.data() as Restaurants;
   
  data.id = a.payload.doc.id;
  console.log(data);
  return data;
   
   // return { id, ...data };
  });
});*/
//this.arr_id = this.db.collection('Restaurants').valueChanges();

/*this.restaurantList = this.db.collection('Restaurants').snapshotChanges().map(
 
  (changes:any) => {
   
  return changes.map(
   
  (a:any) => {
   
  const data = a.payload.doc.data() as Restaurants;
   
  data.id = a.payload.doc.id;
   
  return data;
   
  });
  });*/

/*allUsers: AngularFirestoreCollection<any> ;
  users: Observable<any[]>;
//then in constructor:
this.allUsers = this.db.collection("users");
this.users = this.allUsers.snapshotChanges();

// This works:
this.users.forEach( user => {
  user.forEach( userData =>{
    let data = userData.payload.doc.data();
    let id = userData.payload.doc.id;
    console.log( "ID: ", id, " Data: " , data );
    });
});*/
// .snapshotChanges() returns a DocumentChangeAction[], which contains
// a lot of information about "what happened" with each change. If you want to
// get the data and the id use the map operator.
}
    /*const racesCollection: AngularFirestoreCollection<any> =new AngularFirestoreCollection<any>('');
return racesCollection.snapshotChanges().map(actions => {       
  return actions.map(a => {
    const data = a.payload.doc.data() ;
    data.id = a.payload.doc.id;
    return data;
  });
});*/



/*const orders = this.db.collection('Restaurants').valueChanges();
orders.(
  (response) => {
    this.restaurantList = response;
    console.log(this.restaurantList)
    console.log("success");
    console.log(this.restaurantList.length);
    this.number_of_restaurants=this.restaurantList.length;
  },
  (error) => {
    console.log(error);
  }
);
  }*/


}