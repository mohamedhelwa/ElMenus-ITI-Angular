import { Component, OnInit } from '@angular/core';
import { RestaurantsServiceService } from 'src/app/Services/restaurants-service.service';
import { Restaurants } from 'src/app/ViewModels/restaurants';

@Component({
  selector: 'app-resturant',
  templateUrl: './resturant.component.html',
  styleUrls: ['./resturant.component.scss']
})
export class ResturantComponent implements OnInit {

  

  constructor(private list:RestaurantsServiceService) {}

  ngOnInit(): void {
  }

}
