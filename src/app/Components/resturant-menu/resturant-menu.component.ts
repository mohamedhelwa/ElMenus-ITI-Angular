import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Dishes } from 'src/app/ViewModels/dishes';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-resturant-menu',
  templateUrl: './resturant-menu.component.html',
  styleUrls: ['./resturant-menu.component.scss','../resturant/resturant.component.scss']
})
export class ResturantMenuComponent implements OnInit {

    closeResult='';
    menu: Dishes[] |any;

    //menuList: Dishes[] | any;
    DishBuy:Dishes[]=[];
    add:number = 1;

    restID: string = "";
  constructor(private db:AngularFirestore , 
              private modalService: NgbModal,
              private activatedRoute: ActivatedRoute,
              private router: Router
              ) { }

  ngOnInit(): void {

    let productIDParam: string|null = this.activatedRoute.snapshot.paramMap.get('id');
    this.restID = productIDParam;
  
    this.getRestMenu().snapshotChanges().pipe(
      map( changes =>
        changes.map(o =>
        (console.log({...o.payload.doc.data()}),
          {id: o.payload.doc.id, ...o.payload.doc.data()})
        )
      )
    ).subscribe(response => 
      this.menu = response
    )

  }

  getRestMenu(): AngularFirestoreCollection <Dishes> {
    return this.db.collection('Dishes', ref => ref.where('restaurantId', '==', this.restID));
  }

  buy(i:Dishes){
    console.log(i);
    this.DishBuy.push(i);
    // this.router.navigate(['Checkout']);
    console.log(this.DishBuy)
  }
  addOrder(){
    this.add+=1;
  }
  remOrder(){
    if(this.add <=1){
      this.add = 0;
    }else{
      this.add-=1;
    }
    
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
