import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { OrdersService } from 'src/app/Services/orders.service';
import { CreateOrder } from 'src/app/ViewModels/create-order';

@Component({
  selector: 'app-dashboard-order-list',
  templateUrl: './dashboard-order-list.component.html',
  styleUrls: ['./dashboard-order-list.component.scss']
})
export class DashboardOrderListComponent implements OnInit {

  orderList: CreateOrder[] |any=[];
  constructor(private orderService: OrdersService) 
  { }

  ngOnInit(): void {
    this.retrieveOrders();
    console.log('any');
  }

  retrieveOrders(): void {
    this.orderService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.orderList = data;
    });
  }

}
