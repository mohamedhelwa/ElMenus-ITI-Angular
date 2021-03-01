import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-pastorderdetails',
  templateUrl: './pastorderdetails.component.html',
  styleUrls: ['./pastorderdetails.component.scss']
})
export class PastorderdetailsComponent implements OnInit, OnChanges {
  @Input() orderId;
  @Input() ordersList;
  selectedOrder: any = null;
  lang:string;
  
  constructor(public translate: TranslateService,
              private db: AngularFirestore) {
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

  reorder(orderId:string){
    console.log("selectedOrderId "+orderId)

    let updatedOrder = this.db.collection('Orders').doc(this.orderId);
    var setWithMerge = updatedOrder.set({
      orderStatus: "active"
    }, { merge: true });

    localStorage.setItem("selected_order_id",orderId);
  }
}
