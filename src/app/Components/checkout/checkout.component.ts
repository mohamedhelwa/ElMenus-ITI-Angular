import { CheckoutService } from "./../../Services/checkout.service";
import { FormBuilder, Validators } from "@angular/forms";
import { AfterViewInit, Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Checkout } from "src/app/ViewModels/checkout";
import { AngularFirestore } from "@angular/fire/firestore";
import { Order } from "src/app/ViewModels/order";
import { Dishes } from "src/app/ViewModels/dishes";
import { CreateOrder } from "src/app/ViewModels/create-order";
import { AuthService } from "src/app/Services/auth.service";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"],
})
export class CheckoutComponent implements OnInit {
  // userName: string = "";
  //name, address, building, phone
  users: Checkout[] = [];
  editState: boolean = false;
  userToEdit: Checkout | any;

  editAddressState: boolean = false;

  userName: string = "";
  address: string = "";
  buildingNum: string = "";
  mobNum: string = "";
  userId: string = "";
  order: CreateOrder;
  items: Dishes[];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private db: AngularFirestore,
    private chckoutService: CheckoutService,
    private auth: AuthService
  ) { }

  checkoutFrm = this.fb.group({
    // validate name having atleast four characters
    // ^[a-zA-Z0-9_ ]*$
    userName: [
      "",
      [
        Validators.required,
        Validators.pattern("^[a-zA-Z_ ]{3,}(?: [a-zA-Z_ ]+){0,2}$"),
      ],
    ],
    address: [
      "",
      [
        Validators.required,
        Validators.pattern("^[a-zA-Z_ ,]{3,}(?: [a-zA-Z_ ,]+){0,2}$"),
      ],
    ],
    buildingNum: ["", [Validators.required, Validators.pattern("^[0-9]+$")]],
    floorNum: ["", [Validators.required, Validators.pattern("^[0-9]+$")]],
    apartNum: ["", [Validators.required, Validators.pattern("^[0-9]+$")]],
    mobNum: ["", [Validators.required, Validators.pattern("^01[0-9]{9}")]],
  });

  ngOnInit(): void {

    //Deprecated
    /* this.chckoutService.getUserData()
    .subscribe(users => {
      // console.log(users);      
        this.users = users.map((user)=>{
           return user;
       })                                
    }); */

    this.items = JSON.parse(localStorage.getItem('elmenus_cart')) || [];
    console.log(this.items);

    this.chckoutService.getUsers().subscribe(users => {
      // console.log(users);
      this.users = users;
    })


    /* this.db.collection('/usersInfoTest').valueChanges()
    .subscribe(users => {
      // console.log(users);      
      this.users = users;                  
      console.log(this.users);
    })
 */

  }

  // submitCheckout() {
  //   if (this.userId) {
  //     this.chckoutService.updateUserAddress(this.userId)
  //       .update({
  //         userName: this.checkoutFrm.value.userName,
  //         address: this.checkoutFrm.value.address,
  //         buildingNum: this.checkoutFrm.value.buildingNum,
  //         floorNum: this.checkoutFrm.value.floorNum,
  //         apartNum: this.checkoutFrm.value.apartNum,
  //         mobNum: this.checkoutFrm.value.mobNum
  //       })
  //       .then(() => {
  //         console.log('user Address updated successfully!')
  //         this.saveOrder();
  //       })
  //       .catch(err => console.log(err));
  //   }
  //   else {
  //     this.chckoutService.setUserData(this.checkoutFrm.value)
  //       .then((docRef) => {
  //         this.userId = docRef.id;
  //         console.log('user Address added successfully!');
  //         this.saveOrder();
  //         //console.log("Document written with ID: ", docRef.id);
  //       })


  //     /* this.router.navigate(["/Delivery"]).then(() => {
  //       console.log("navigated");
  //     }); */

  //   }
  //   this.userName = this.checkoutFrm.value.userName;
  //   this.address = this.checkoutFrm.value.address;
  //   this.buildingNum = this.checkoutFrm.value.buildingNum;
  //   this.mobNum = this.checkoutFrm.value.mobNum;

  //   this.editAddressState = true;
  //   this.checkoutFrm.reset();
  // }

  saveOrder() {
    // var orderDoc = this.db.collection("Orders").doc();
    this.userName = this.checkoutFrm.value.userName;
    this.address = this.checkoutFrm.value.address;
    this.buildingNum = this.checkoutFrm.value.buildingNum;
    this.mobNum = this.checkoutFrm.value.mobNum;
    this.order = {
      items: this.items,
      itemsQuantity: this.items.length,
      orderDate: new Date().toString(),
      orderID: "",
      orderStatus: 'active',
      paymentMethod: 'Cash',
      restaurantID: this.items[0].restaurantId,
      uid: this.auth.getUid(),
      userName: this.userName,
      totalPrice: 132,
      orderAddress: {
        addressInfo: this.address,
        builldingNumber: this.buildingNum,
        floorNumber: this.buildingNum,
        ApartNumber: this.buildingNum,
      },
      userPhone: this.mobNum
    }
    console.log("in save order!!")
    // var orderDoc = this.db.collection("Orders").doc();
    // orderDoc.set(this.order);
    // orderDoc.update({"orderID":orderDoc.ref.id})
    localStorage.setItem("order_data",JSON.stringify(this.order))
    this.router.navigate(['/Home']);
  }
  navToTest() {
    this.router.navigate(["/delivery"]);
  }


  deleteAddress(userId: string) {
    this.chckoutService.deleteUserAddress(userId);
    location.reload();
    this.editAddressState = false;
  }

  setUserId(userId: string) {
    this.editAddressState = false;
    console.log(userId);
    this.userId = userId;
  }

}
