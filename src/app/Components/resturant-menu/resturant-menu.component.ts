import { Component, OnInit } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Dishes } from "src/app/ViewModels/dishes";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ActivatedRoute, Router } from "@angular/router";
import { map } from "rxjs/operators";
import { User } from "src/app/ViewModels/user";
import { Restaurants } from 'src/app/ViewModels/restaurants';

@Component({
  selector: "app-resturant-menu",
  templateUrl: "./resturant-menu.component.html",
  styleUrls: [
    "./resturant-menu.component.scss",
    "../resturant/resturant.component.scss",
  ],
})
export class ResturantMenuComponent implements OnInit {

  //resturnt ID / Menu
  restID: string = "";
  menu: Dishes[] | any;

  dishSize = "small";
  // cont items
  add: number = 1;
  itemsNumber: number = 0;

  //local storage saved array
  DishBuy: Dishes[] = [];

  //total price
  totalOrderPrice: number = 0;
  resObj:Restaurants;
  

  constructor(
    private db: AngularFirestore,
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  

  //get resturnt menu
  ngOnInit(): void {
    let productIDParam:
      | string
      | null = this.activatedRoute.snapshot.paramMap.get("id");
    this.restID = productIDParam;

    this.getRestMenu()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map(
            (o) => (
              // console.log({ ...o.payload.doc.data() }),
              { id: o.payload.doc.id, ...o.payload.doc.data() }
            )
          )
        )
      )
      .subscribe((response) => (this.menu = response));


      this.db.collection('Restaurants').doc(this.restID).ref.get().then((response) =>{
        this.resObj = response.data();
        console.log(this.resObj)
      }).catch(function (error) {
        console.log("There was an error getting your document:", error);
      });
  }

  //get resturnt menu
  getRestMenu(): AngularFirestoreCollection<Dishes> {
    return this.db.collection("Dishes", (ref) =>
      ref.where("restaurantId", "==", this.restID)
    );
  }


  //buy dish / calc total price
  buy(i: Dishes) {
    i.dishSize = this.dishSize;
    if (this.add != 0){
      this.itemsNumber += this.add;
    i.dishQuantity = this.add;
    i.dishTotalPrice = this.add * i.dishPrice;
    // console.log(i);
    this.DishBuy.push(i);
    console.log(this.DishBuy);
    // update total price
    this.totalOrderPrice += i.dishTotalPrice;
    console.log("order total price " + this.totalOrderPrice);
    }
    this.add = 1;
  }

  //itemCount btn +
  addOrder() {
    this.add += 1;
  }
  //itemCount btn -
  remOrder() {
    if (this.add <= 1) {
      this.add = 0;
    } else {
      this.add -= 1;
    }
  }
  // open openDishModal
  open(content) {
    this.modalService.open(content ,{ scrollable: true , });
  }
  //delete item from DishBy
  deleteItem(dishId :number){
    this.DishBuy.forEach((e,i)=>{
      if(e.dishId === dishId){
        this.DishBuy.splice(i,1)
        this.itemsNumber-=e.dishQuantity
        this.totalOrderPrice -=e.dishTotalPrice
      }
    })
    console.log(this.DishBuy)
    

  }
  //navigate to checkout
  goto() {
    this.router.navigate(["Checkout"]);
    //set local storage.
    localStorage.setItem('resturantImage',this.resObj.logo);
    localStorage.setItem('resturantName',this.resObj.restaurantName);
    localStorage.setItem("total_order_price", this.totalOrderPrice.toString());
    localStorage.setItem("elmenus_cart", JSON.stringify(this.DishBuy));
  }
  
}
