import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { OrdersService } from 'src/app/Services/orders.service';
import { PastordersService } from 'src/app/Services/pastorders.service';
import { Orderitem } from 'src/app/ViewModels/orderitem';
import { map, switchMap } from 'rxjs/operators'
import { AuthService } from 'src/app/Services/auth.service';
import { User } from 'src/app/ViewModels/user';
import { orderData } from 'src/app/ViewModels/orderData';
import { BehaviorSubject, Observable } from 'rxjs';
import { Restaurants } from 'src/app/ViewModels/restaurants';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-pastorders',
  templateUrl: './pastorders.component.html',
  styleUrls: ['./pastorders.component.scss']
})
export class PastordersComponent implements OnInit, AfterViewInit {

  orderId: string;
  order$: Observable<orderData[]>;
  userId$: BehaviorSubject<string>;
  ordersList: any = [];
  showLoading: boolean = true;
  flag: boolean = false;
  lang:string;

  restaurant:Restaurants;
  resturantsList:Restaurants[]=[];

  constructor(public translate: TranslateService,
    private orderService: PastordersService,
    private afs: AngularFirestore,
    public auth: AuthService) {
    // get user id
    this.userId$ = new BehaviorSubject(this.auth.getUid());
    this.lang = localStorage.getItem('currentLang') || 'en';
    this.translate.use(this.lang);
  }
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    // get docs where user id equal auth uid
    this.order$ = this.userId$.pipe(
      switchMap(uid =>
        this.afs.collection<orderData>('Orders', ref => ref.where('uid', '==', uid)).valueChanges()
      )
    )
    console.log(this.order$);

    this.order$.subscribe(orders => {
      this.ordersList = orders,
      this.showLoading = false
    })
    
    console.log(this.showLoading);
    console.log(this.ordersList)
  }

  getorderDetails(id: string) {
    console.log(id)
    this.orderId = id
    localStorage.setItem('reOrderedID', id);
  }
}
