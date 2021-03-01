import { Router } from '@angular/router';
import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { map } from "rxjs/operators";
import { DishesService } from "src/app/Services/dishes.service";
import { Dishes } from "src/app/ViewModels/dishes";
import { Restaurants } from 'src/app/ViewModels/restaurants';
import { RestaurantsServiceService } from 'src/app/Services/restaurants-service.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: "app-menulist-dashboard",
  templateUrl: "./menulist-dashboard.component.html",
  styleUrls: ["./menulist-dashboard.component.scss"],
})
export class MenulistDashboardComponent implements OnInit {
  MenuList: Dishes[] | any = [];
  currentMenu: Dishes ;
  menuId:number;
  updateMenustatus:boolean = false;

  selectedRestID: string = "4Hpczs92kSscD9Y2af7c";
  restaurantsList: Restaurants[] = [];
  
  constructor(private dishService: DishesService,
              private router: Router,
              private restaurantsService: RestaurantsServiceService,
              private db: AngularFirestore) {
    //this.retrieveMenues();
  }
  
  ngOnInit(): void {
    this.retrieveRestaurants();
    this.getCategoryMenu();
  }

  retrieveRestaurants(): void {
    this.restaurantsService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.restaurantsList = data;
      // console.log(this.restaurantsList);
    });
  }

  selectedoption():AngularFirestoreCollection <Dishes>{
    console.log(this.selectedRestID);
      return this.db.collection('Dishes', ref => ref.where('restaurantId', '==', this.selectedRestID));
      
      }
    
    getCategoryMenu():void{
      this.selectedoption().snapshotChanges().pipe(
        map( changes =>
          changes.map(o =>
          (console.log({...o.payload.doc.data()}),
            {id: o.payload.doc.id, ...o.payload.doc.data()})
          )
        )
      ).subscribe(response => 
        this.MenuList = response
      )
    }


  refreshList(): void {
    this.currentMenu = undefined;
    //this.currentIndex = -1;
    this.retrieveMenues();
  }

  retrieveMenues(): void {
    this.dishService
      .getAll()
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((c) => ({
            id: c.payload.doc.id,
            ...c.payload.doc.data(),            
          }))
        )
      )
      .subscribe((data) => {
        this.MenuList = data;
        // console.log(data.length);
        //  console.log(this.MenuList);
      });
  }

  updateMenu(menuId: number, menu: Dishes) {
    this.updateMenustatus = !this.updateMenustatus;
    this.menuId = menuId;
    console.log("updated", this.menuId);
    console.log("updated", menu);
    this.currentMenu = menu;
  }

  deleteMenu(menuId: number) {
    const response = confirm('Are You Sure, You Want to Delete this menu?');
    if(response){
      this.dishService.deleteDish(menuId.toString()).then(
        () => { 
          console.log("Menu Deleted Successfully!");
          this.refreshList();
        }
      )
    }
  }

  addMenu() {  
    this.router.navigate(['/dashboard/addMenu']);
  }
}
