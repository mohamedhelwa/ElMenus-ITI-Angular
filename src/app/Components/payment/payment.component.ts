import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ICreateOrderRequest } from 'ngx-paypal';
import { AuthService } from 'src/app/Services/auth.service';
import { CheckoutService } from 'src/app/Services/checkout.service';
import { CreateOrder } from 'src/app/ViewModels/create-order';
import { Dishes } from 'src/app/ViewModels/dishes';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
  providers: [
    DatePipe
  ]
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

  public payPalConfig: any;

  constructor(private router:Router,
    private db: AngularFirestore,
    private chckoutService: CheckoutService,
    private auth: AuthService,
    private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.order = JSON.parse(localStorage.getItem("order_data"));
    console.log(JSON.parse(localStorage.getItem("order_data")));


    // PayPal
    this.payPalConfig = {
      currency: "EUR",
      clientId:
        "AYvU7p49APJ3TWCP7EPq6Z1Sm7LijDirPdDI-G6DjNasJ2tyIVCwb0IZL1v5cKy_tw7qPr_2ybS62gCR",
      createOrder: data =>
        <ICreateOrderRequest>{
          intent: "CAPTURE",
          purchase_units: [
            {
              amount: {
                currency_code: "EUR",
                value: "9.99",
                breakdown: {
                  item_total: {
                    currency_code: "EUR",
                    value: "9.99"
                  }
                }
              },
              items: [
                {
                  name: "Enterprise Subscription",
                  quantity: "1",
                  category: "DIGITAL_GOODS",
                  unit_amount: {
                    currency_code: "EUR",
                    value: "9.99"
                  }
                }
              ]
            }
          ]
        },
      advanced: {
        commit: "true"
      },
      style: {
        label: "paypal",
        layout: "vertical"
      },
      onApprove: (data, actions) => {
        console.log(
          "onApprove - transaction was approved, but not authorized",
          data,
          actions
        );
        actions.order.get().then(details => {
          console.log(
            "onApprove - you can get full order details inside onApprove: ",
            details
          );
        });
      },
      onClientAuthorization: data => {
        console.log(
          "onClientAuthorization - you should probably inform your server about completed transaction at this point",
          data
        );
      },
      onCancel: (data, actions) => {
        console.log("OnCancel", data, actions);
      },
      onError: err => {
        console.log("OnError", err);
      },
      onClick: (data, actions) => {
        console.log("onClick", data, actions);
      }
    };
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

    orderDoc.set(this.order);
    orderDoc.update({"orderID":orderDoc.ref.id,"orderDate":this.datePipe.transform(new Date(), 'short')})
    localStorage.setItem('reOrderedID', orderDoc.ref.id);
    // remove order from local stoarge
    localStorage.removeItem("order_data");
    console.log("order Done")
    this.router.navigate(['/trackOrder']);
  }

  goToPaypal(){
    this.router.navigate(['/paypal']);
  }
}
