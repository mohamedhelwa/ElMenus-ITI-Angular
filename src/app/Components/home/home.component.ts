import { HomeService } from "./../../Services/home.service";
import { AfterViewInit, Component, OnChanges, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AngularFirestore } from "@angular/fire/firestore";
import { RegisterService } from "src/app/Services/register.service";
import { AngularFireAuth } from "@angular/fire/auth";
import { AuthService } from "src/app/Services/auth.service";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, OnChanges {
  lang: string;

  
  restaurantSearchFrm = this.fb.group({
    restaurantName: [""],
    selectedBranch: [""],
  });
  branches: any[] = [];
  defaultVal: number = 1;

  checkAuth: any;

  user = {};
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private db: AngularFirestore,
    private homeService: HomeService,
    public auth: AuthService,
    public translateService: TranslateService
  ) {
    //this.lang = "en";
    this.lang = localStorage.getItem('currentLang') || 'en';
    this.translateService.use(this.lang);
  }

  changeLanguage(lang: string) {
    this.lang = lang;
    //this.translateService.setDefaultLang(this.lang);
    this.translateService.use(this.lang);
    localStorage.setItem("currentLang", lang);
  }

  ngOnChanges(): void {}

  ngOnInit(): void {
    var order = JSON.parse(localStorage.getItem("order_data"));
    console.log(order);
    this.homeService.getAllBranches().subscribe((branches) => {
      this.branches = branches;
      // console.log(this.branches);
    });
    // console.log(this.restaurantName);
  }

  viewRestaurant() {
    console.log("Clicked");

    // console.log(this.restaurantSearchFrm.value);
    console.log(this.restaurantSearchFrm.value.restaurantName);
    console.log(this.restaurantSearchFrm.value.selectedBranch);

    if (this.restaurantSearchFrm.value.restaurantName == "")
      this.homeService.setData(
        "",
        this.restaurantSearchFrm.value.selectedBranch
      );

    if (
      this.restaurantSearchFrm.value.restaurantName &&
      this.restaurantSearchFrm.value.selectedBranch
    ) {
      this.homeService.setData(
        this.restaurantSearchFrm.value.restaurantName,
        this.restaurantSearchFrm.value.selectedBranch
      );
    }

    this.router.navigate(["/search"]).then(() => {
      console.log("navigated");
    });
  }
}
