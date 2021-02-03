import { CheckoutService } from "./../../Services/checkout.service";
import { FormBuilder, Validators } from "@angular/forms";
import { AfterViewInit, Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Checkout } from "src/app/ViewModels/checkout";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"],
})
export class CheckoutComponent implements OnInit {
  // userName: string = "";
  //name, address, building, phone
  users: Checkout[]=[];
  editState: boolean = false;
  userToEdit: Checkout|any;

  editAddressState: boolean = false;
  
  userName:string = "";
  address:string = "";
  buildingNum:string = "";
  mobNum:string = "";
  userId:string ="";
  

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private db: AngularFirestore,
    private chckoutService: CheckoutService
  ) {}
 
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

  submitCheckout() {
      if(this.userId){            
        this.chckoutService.updateUserAddress(this.userId)
        .update({
          userName: this.checkoutFrm.value.userName,
          address: this.checkoutFrm.value.address,
          buildingNum: this.checkoutFrm.value.buildingNum,
          floorNum: this.checkoutFrm.value.floorNum,
          apartNum: this.checkoutFrm.value.apartNum,
          mobNum: this.checkoutFrm.value.mobNum          
          })       
        .then(() => {
          console.log('user Address updated successfully!')})
        .catch(err => console.log(err));
      }
      else {
        this.chckoutService.setUserData(this.checkoutFrm.value)
        .then((docRef) => {          
            this.userId = docRef.id;
            console.log('user Address added successfully!');            
            //console.log("Document written with ID: ", docRef.id);
          })            
                 
          
          /* this.router.navigate(["/Delivery"]).then(() => {
            console.log("navigated");
          }); */
          
        }
       this.userName = this.checkoutFrm.value.userName;
       this.address = this.checkoutFrm.value.address;
       this.buildingNum = this.checkoutFrm.value.buildingNum;
       this.mobNum = this.checkoutFrm.value.mobNum; 
       
       this.editAddressState = true;
       this.checkoutFrm.reset();
}

  navToTest(){
    this.router.navigate(["/delivery"]);
  }

  // deleteUser(user:Checkout){
  //   this.chckoutService.deleteUser(user);
  // }

  // editUser(user:Checkout){
  //   this.editState = true;
  //   this.userToEdit = user;
  // }

  // updateUser(user:Checkout){
  //   this.chckoutService.updateUser(user);
  // }

  // editUser(userId:string){
  //   this.editAddressState = false;
  //   console.log(userId);    
  // }

  deleteAddress(userId:string){
    this.chckoutService.deleteUserAddress(userId);
    location.reload();
    this.editAddressState = false;
  }

  setUserId(userId:string){
    this.editAddressState = false;
    console.log(userId);
    this.userId = userId;
  }
  // setUserName(userName:string){
  //   // console.log(userName);
  //   this.userName = userName;
  // }

}
/**{
      "address": 13,
      "apartNum": "Red",
      "buildingNum":"",
      "floorNum":"",
      "mobNum":"",
      "userName":""
    } */