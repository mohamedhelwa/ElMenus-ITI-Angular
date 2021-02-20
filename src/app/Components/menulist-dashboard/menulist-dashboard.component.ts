import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { DishesService } from 'src/app/Services/dishes.service';
import { Dishes } from 'src/app/ViewModels/dishes';
 
@Component({
  selector: 'app-menulist-dashboard',
  templateUrl: './menulist-dashboard.component.html',
  styleUrls: ['./menulist-dashboard.component.scss']
})
export class MenulistDashboardComponent implements OnInit {
  MenuList: Dishes[] | any = [];

  constructor( private dishService:DishesService) {
    this.retrieveMenues();

   }

  ngOnInit(): void {
  }

  retrieveMenues(): void {
    this.dishService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.MenuList = data;
     // console.log(data.length);     
   //  console.log(this.MenuList);

    });
  }

}
