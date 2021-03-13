import { DatePipe } from "@angular/common";
import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CreateOrder } from 'src/app/ViewModels/create-order';
import { orderData } from 'src/app/ViewModels/orderData';

@Component({
  selector: 'app-pastorderdetails',
  templateUrl: './pastorderdetails.component.html',
  styleUrls: ['./pastorderdetails.component.scss'],
  providers: [
    DatePipe
  ]
})
export class PastorderdetailsComponent implements OnInit, OnChanges {
  @Input() orderId;
  @Input() ordersList;
  selectedOrder: any = null;
  lang:string;
  
  constructor(public translate: TranslateService,
              private db: AngularFirestore,
              private router:Router,
              private datePipe: DatePipe) {
    this.lang = localStorage.getItem('currentLang') || 'en';
    this.translate.use(this.lang);
  }
  ngOnChanges(): void {
    this.getOrderById(this.orderId);
  }

  ngOnInit(): void {
    this.selectedOrder = this.ordersList[0];
    this.getOrderById(this.orderId);
  }

  getOrderById(id: string) {
    return this.db.collection('Orders').doc(id).ref.get()
      .then((doc) => {
        if (doc.exists) {
          this.selectedOrder = doc.data();
          console.log(this.selectedOrder);
        }
        else {
          console.log("There is no document");
        }
      }).catch(function (err) {
        console.log("error !!", err);
      })
  }

  reorder(){
    
    console.log("in reorder order!!")
    
    this.db.collection('Orders').doc(this.orderId).ref.get()
    .then(async (doc) => {
      let orderDoc = this.db.collection("Orders").doc();
      console.log(doc.data());
      
      await orderDoc.set(doc.data());
      await orderDoc.update({"orderID":orderDoc.ref.id,"orderStatus":"active","orderDate":this.datePipe.transform(new Date(), 'short')})
  
      console.log('new order doc '+orderDoc.ref.id);
      localStorage.removeItem('reOrderedID');
  
      console.log("order Done")
      localStorage.setItem("selected_order_id",orderDoc.ref.id);
      this.router.navigate(['/trackOrder']);
      localStorage.setItem('reOrderedID',orderDoc.ref.id);

      // location.reload();
    });
  }

  goTotrackOrder(orderId:string){
    this.router.navigate(['/trackOrder']);
    localStorage.setItem('reOrderedID',orderId);
  }
}
