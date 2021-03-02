import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
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
              private db: AngularFirestore,
              private router:Router) {
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

  reorder(id:string){
    console.log("selectedOrderId "+id)
    console.log("in reorder order!!")
    
    this.db.collection('Orders').doc(id).ref.get()
    .then(async (doc) => {
      var orderDoc = this.db.collection("Orders").doc();
      console.log(doc.data());
      await orderDoc.set(doc.data());
      await orderDoc.update({"orderID":orderDoc.ref.id,"orderStatus":"active"})
  
      console.log(orderDoc.ref.id);
      
      localStorage.setItem('reOrderedID',orderDoc.ref.id);
  
      console.log("order Done")
      localStorage.setItem("selected_order_id",orderDoc.ref.id);
      this.router.navigate(['/trackOrder']);
  
      
    });
    
    

    
  }
}
