import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Dishes } from 'src/app/ViewModels/dishes';

@Component({
  selector: 'app-resturant-menu',
  templateUrl: './resturant-menu.component.html',
  styleUrls: ['./resturant-menu.component.scss','../resturant/resturant.component.scss']
})
export class ResturantMenuComponent implements OnInit {

  menu:Dishes[] | any;
  
  constructor(private db:AngularFirestore) { }

  ngOnInit(): void {
    const d = this.db.collection('Dishes').valueChanges();
    d.subscribe(
      (response) => {
        this.menu = response;
        console.log(this.menu)
      },
      (error) => {
        console.log(error);
      }
    );

  }
}
