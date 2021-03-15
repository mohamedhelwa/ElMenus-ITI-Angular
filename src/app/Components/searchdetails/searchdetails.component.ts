import { Component, Input, OnInit } from '@angular/core';
import { Restaurants } from 'src/app/ViewModels/restaurants';

@Component({
  selector: 'app-searchdetails',
  templateUrl: './searchdetails.component.html',
  styleUrls: ['./searchdetails.component.scss']
})
export class SearchdetailsComponent implements OnInit {

  public lang:string;
  @Input() resturant:Restaurants;
  selectedResturant: Restaurants = {
    restaurantName: '',
    restaurantClosing: '',
    restaurantOpening: '',
    restaurantPhone:'',
    restaurantType:'',
    restaurantBranchs:[],
    restaurantFeaturedPhotos:[],

    restaurantName_ar:'',
    restaurantType_ar:'',
    adress_ar:'',
  };

  constructor() { }

  ngOnInit(): void {
    this.lang = localStorage.getItem('currentLang');
    this.selectedResturant = {...this.resturant};
  }

}
