import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { OrdersService } from 'src/app/Services/orders.service';
import { PastordersService } from 'src/app/Services/pastorders.service';
import { Orderitem } from 'src/app/ViewModels/orderitem';
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-pastorders',
  templateUrl: './pastorders.component.html',
  styleUrls: ['./pastorders.component.scss']
})
export class PastordersComponent implements OnInit {
  
  orders:any;
  orderId:string;
  constructor(private orderService:PastordersService) { 

  }
  ngOnInit(): void {
    this.getAllOrders();
  }
  getAllOrders(){
    this.orderService.getAllOrders().snapshotChanges().pipe(
      map( changes =>
        changes.map(o =>
        (console.log({...o.payload.doc.data()}),
          {...o.payload.doc.data()})
        
        )
      )
    ).subscribe(orders => 
      this.orders = orders
    )
  }

  getorderDetails(id:string){
    console.log(id)
    this.orderId=id
  }
}
