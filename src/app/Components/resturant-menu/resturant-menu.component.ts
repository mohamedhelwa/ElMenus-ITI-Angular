import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Dishes } from 'src/app/ViewModels/dishes';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-resturant-menu',
  templateUrl: './resturant-menu.component.html',
  styleUrls: ['./resturant-menu.component.scss','../resturant/resturant.component.scss']
})
export class ResturantMenuComponent implements OnInit {

    closeResult='';
    menu:Dishes[] | any;
    DishBuy:Dishes[];
    add:number = 1;
  constructor(private db:AngularFirestore , private modalService: NgbModal) { }

  ngOnInit(): void {
    const d = this.db.collection('Dishes').valueChanges();
    d.subscribe(
      (response) => {
        this.menu = response;
        // console.log(this.menu)
      },
      (error) => {
        console.log(error);
      }
    );

  }
  buy(i){
    this.DishBuy= i;
    console.log(i)
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
