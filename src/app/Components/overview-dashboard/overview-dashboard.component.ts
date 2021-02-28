import { User } from "./../../ViewModels/user";
import { Order } from "./../../ViewModels/order";
import { Component, OnInit } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { DishesService } from "src/app/Services/dishes.service";
import { RestaurantsServiceService } from "src/app/Services/restaurants-service.service";

@Component({
  selector: "app-overview-dashboard",
  templateUrl: "./overview-dashboard.component.html",
  styleUrls: ["./overview-dashboard.component.scss"],
})
export class OverviewDashboardComponent implements OnInit {
  orders: AngularFirestoreCollection<Order>;
  users: AngularFirestoreCollection<User>;
  restaurantListLength: number;
  menusListLength: number;
  reviewsListLength: number;
  ordersListLength: number;
  usersListLength: number;

  ///////////Chart/////
  public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  public lineChartLabels = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Nov",
    "Dec",
  ];
  // public lineChartType = 'line';
  public lineChartLegend = true;

  public lineChartData = [
    // {
    //   data: [3, 7, 4, 8, 10, 11, 9, 5, 10, 3, 7, 15],
    //   label: "Orders / Month (2020)",
    // },
    // {
    //   data: [3, 3, 5, 10, 15, 11, 20, 19, 22, 28, 30, 32],
    //   label: "Orders / Month (2021)",
    // },
    // // { data: [28, 48, 40, 19, 86, 27, 80], label: "Orders in March" },
  ];
  ///////////Chart/////

  constructor(
    private restService: RestaurantsServiceService,
    private menuService: DishesService,
    private reviewService: RestaurantsServiceService,
    private db: AngularFirestore
  ) {
    this.orders = this.db.collection("/Orders");
    this.users = this.db.collection("/users");
  }

  ngOnInit(): void {
    this.retrieveRestaurants();
    this.retrieveMenus();
    this.retrieveReviews();
    // get Orders_List Length
    this.getAllOrders()
      .snapshotChanges()
      .subscribe((data) => {
        this.ordersListLength = data.length;
        //console.log(this.ordersListLength);

        //Fill chart data
        this.lineChartData = [
          {
            data: [2, 7, 4, 8, 10, 11, 9, 5, 10, 3, 7, 15],
            label: "Orders / Month (2020)",
          },
          {
            data: [
              this.ordersListLength,
              3,
              5,
              10,
              15,
              11,
              20,
              19,
              22,
              28,
              30,
              32,
            ],
            label: "Orders / Month (2021)",
          },
          // { data: [28, 48, 40, 19, 86, 27, 80], label: "Orders in March" },
        ];
      });

    // get Users_List Length
    this.getAllUsers()
      .snapshotChanges()
      .subscribe((data) => {
        this.usersListLength = data.length;
        //console.log(this.usersListLength);
      });
  }

  getAllUsers(): AngularFirestoreCollection<User> {
    return this.users;
  }
  getAllOrders(): AngularFirestoreCollection<Order> {
    return this.orders;
  }

  retrieveRestaurants(): void {
    this.restService
      .getAll()
      .snapshotChanges()
      .subscribe((data) => {
        this.restaurantListLength = data.length;
        //console.log(this.restaurantListLength);
      });
  }

  retrieveMenus(): void {
    this.menuService
      .getAll()
      .snapshotChanges()
      .subscribe((data) => {
        this.menusListLength = data.length;
        //console.log(this.menusListLength);
      });
  }

  retrieveReviews(): void {
    this.reviewService
      .getAllReviews()
      .snapshotChanges()
      .subscribe((data) => {
        this.reviewsListLength = data.length;
        //console.log(this.reviewsListLength);
      });
  }
}
