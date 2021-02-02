import { CheckoutService } from './../../Services/checkout.service';
import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import { Checkout } from 'src/app/ViewModels/checkout';

@Component({
  selector: 'app-delivery-features-order-online',
  templateUrl: './delivery-features-order-online.component.html',
  styleUrls: ['./delivery-features-order-online.component.scss']
})
export class DeliveryFeaturesOrderOnlineComponent implements OnInit {
  userData:Checkout|any;  

  @Input('userName') usrNmfrmprnt:string='';
  @Input('address') addrfrmprnt:string='';
  @Input('buildingNum') bldngNmfrmprnt:string='';
  @Input('mobNum') mobNmfrmprnt:string='';
  @Input('userId') currentUserId:string='';

  @Output() deleteEvent = new EventEmitter<string>();
  @Output() updateEvent = new EventEmitter<string>();

  id:string='';
  address:string='';
  apartNum:string='';
  buildingNum:string='';
  floorNum:string='';
  mobNum:string='';
  userName:string='';

  constructor(private chckoutService: CheckoutService,
              private router: Router
              ) { }
  
  ngOnInit(): void {
    // this.userData = this.chckoutService.getData()
    /* console.log(this.chckoutService.getData().userName);
    console.log(this.chckoutService.getData().address);
    console.log(this.chckoutService.getData().buildingNum);
    console.log(this.chckoutService.getData().phoneNumber);   */

      //NSG0SGwJzMga4LRdV5qq
     this.chckoutService.getUserById(this.currentUserId).then( (doc:any) => {
      if (doc.exists) {
        this.userData = doc.data();
        console.log("User data:", this.userData);
        this.address = this.userData.address;
        this.apartNum = this.userData.apartNum;
        this.buildingNum = this.userData.buildingNum;
        this.floorNum = this.userData.floorNum;
        this.id = this.userData.id;
        this.mobNum = this.userData.mobNum;
        this.userName = this.userData.userName;
      } else {
        console.log("No such document!");
      }
    })
    .catch(function (error) {
      console.log("Error getting document:", error);
    });       
    // console.log(this.userData);
    

    // this.userName =  this.chckoutService.getData().userName;
    // this.address = this.chckoutService.getData().address;
    // this.buildingNum = this.chckoutService.getData().buildingNum;
    // this.phoneNumber = this.chckoutService.getData().phoneNumber;
  }
  navToChckout() {
    // this.router.navigate(['/Checkout'])
  }
  navToTest() {
    this.router.navigate(['/Test'])
  }

  // deleteAddress(){
  //   this.chckoutService.deleteUserAddress(this.currentUserId);
  //   this.onChildEditOrDelete.emit();
  // }

  deleteUserAddress(): void {
    this.deleteEvent.next(this.currentUserId);
  }
  updateUserAddress(): void{
    this.updateEvent.next(this.currentUserId);    
  }

}
