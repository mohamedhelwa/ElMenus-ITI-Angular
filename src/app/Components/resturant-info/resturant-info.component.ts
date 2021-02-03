import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Restaurants } from 'src/app/ViewModels/restaurants';

@Component({
  selector: 'app-resturant-info',
  templateUrl: './resturant-info.component.html',
  styleUrls: ['./resturant-info.component.scss','../resturant/resturant.component.scss']
})
export class ResturantInfoComponent implements OnInit {
  
  list:any[];
  listofres:Restaurants | any ;

  constructor(private db:AngularFirestore) { }

  ngOnInit(): void {
    const d = this.db.collection('Dishes').valueChanges();
    d.subscribe(
      (response) => {
        this.list = response;
      },
      (error) => {
        console.log(error);
      }
    );
    const r = this.db.collection('Restaurants').valueChanges();
    r.subscribe(
      (response) => {
        this.listofres = response[0];
        console.log(this.listofres)
      },
      (error) => {
        console.log(error);
      }
    );

  }

}
