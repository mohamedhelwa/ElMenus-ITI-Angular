import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { CheckoutService } from 'src/app/Services/checkout.service';
import { CreateOrder } from 'src/app/ViewModels/create-order';
import { Dishes } from 'src/app/ViewModels/dishes';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  userName: string = "";
  address: string = "";
  buildingNum: string = "";
  mobNum: string = "";
  userId: string = "";
  order: any;
  items: Dishes[];
  paymentMethod:string = "Cash On Delivery";

  constructor(private router:Router,
    private db: AngularFirestore,
    private chckoutService: CheckoutService,
    private auth: AuthService) { }

  ngOnInit(): void {
    this.order = JSON.parse(localStorage.getItem("order_data"));
    console.log(JSON.parse(localStorage.getItem("order_data")))
  }

  goToDelivery() {
    this.router.navigate(["/delivery"]);
  }

  onPaymentChange(value:string){
    console.log(value)
    this.paymentMethod = value;
  }
  saveOrder() {
    this.order.paymentMethod = this.paymentMethod;
    var orderDoc = this.db.collection("Orders").doc();
    
    console.log("in save order!!")

    var orderDoc = this.db.collection("Orders").doc();
    orderDoc.set(this.order);
    orderDoc.update({"orderID":orderDoc.ref.id})
    localStorage.setItem('reOrderedID', orderDoc.ref.id);
    // remove order from local stoarge
    localStorage.removeItem("order_data");
    console.log("order Done")
    this.router.navigate(['/trackOrder']);
  }
}
