import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { DishesService } from "src/app/Services/dishes.service";
import { Dishes } from "src/app/ViewModels/dishes";

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

  constructor(private dishService: DishesService,
              private router: Router) {
    this.retrieveMenues();
  }

  ngOnInit(): void {}

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
    this.dishService.deleteDish(menuId.toString()).then(
      () => { 
        console.log("Menu Deleted Successfully!");
        this.refreshList();
      }
    )
  }

  addMenu() {  
    this.router.navigate(['/addMenu']);
  }
}
