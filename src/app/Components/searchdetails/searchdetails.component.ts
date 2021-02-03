import { Component, Input, OnInit } from '@angular/core';
import { Restaurants } from 'src/app/ViewModels/restaurants';

@Component({
  selector: 'app-searchdetails',
  templateUrl: './searchdetails.component.html',
  styleUrls: ['./searchdetails.component.scss']
})
export class SearchdetailsComponent implements OnInit {

  @Input() resturant:Restaurants;
  selectedResturant: Restaurants = {
    restaurantName: '',
    restaurantClosing: '',
    restaurantOpening: '',
    restaurantPhone:'',
    restaurantType:'',
    restaurantBranchs:[],
    restaurantFeaturedPhotos:[]
  };

  constructor() { }

  ngOnInit(): void {
    this.selectedResturant = {...this.resturant};
  }

}
