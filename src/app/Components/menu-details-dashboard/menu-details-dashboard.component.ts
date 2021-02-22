import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { DishesService } from "src/app/Services/dishes.service";
import { Dishes } from "src/app/ViewModels/dishes";

@Component({
  selector: "app-menu-details-dashboard",
  templateUrl: "./menu-details-dashboard.component.html",
  styleUrls: ["./menu-details-dashboard.component.scss"],
})
export class MenuDetailsDashboardComponent implements OnInit {
  @Input() menu: Dishes;
  @Input() menuId: number;  
  @Output() refreshList: EventEmitter<any> = new EventEmitter();


  //menuId: number;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private dishService: DishesService,
  ) {}

  menuForm = this.fb.group({
    dishName: [""],
    dishPrice: [""],
    dishSize: [""],
    dishDescription: [""],
  });

  ngOnInit() {
    console.log("menu-details", this.menu);
    console.log("menu-details-id", this.menuId);
    //this.menuId = this.menu.id;
  }
  updateMenu() {
    //console.log(this.menuForm.value);
    const data = {
      dishName: this.menuForm.value.dishName,
      dishPrice: this.menuForm.value.dishPrice,
      dishSize: this.menuForm.value.dishSize,
      dishDescription: this.menuForm.value.dishDescription,
    };
    //console.log("iddd", this.menuId);

    this.dishService.updateDish(this.menuId.toString(), data).then(
      () =>{         
        console.log('updated');
        this.refreshList.emit();
      }    
    );    
  }
}


