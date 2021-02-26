import { Component, OnInit,Input,Output,EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { RestaurantsServiceService } from 'src/app/Services/restaurants-service.service';
import { Restaurants } from 'src/app/ViewModels/restaurants';

@Component({
  selector: 'app-details-restaurant-dashboard',
  templateUrl: './details-restaurant-dashboard.component.html',
  styleUrls: ['./details-restaurant-dashboard.component.scss']
})
export class DetailsRestaurantDashboardComponent implements OnInit ,OnChanges{

  @Input() restaurant?: Restaurants;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentrestaurant: Restaurants = {
    restaurantName: '',
    restaurantClosing: '',
    restaurantOpening: '',
    restaurantPhone:'',
    restaurantType:'',
    restaurantBranchs:[],
    restaurantFeaturedPhotos:[]

  };
  clientName:string;
  message = '';
  constructor(private restService: RestaurantsServiceService) { }
  ngOnChanges(): void {
    this.message = '';
    this.currentrestaurant = { ...this.restaurant };
  }

  ngOnInit(): void {
    this.message = '';
  }

  updateRestaurant(): void {
    const data = {
      restaurantName : this.currentrestaurant.restaurantName,
      restaurantOpening: this.currentrestaurant.restaurantOpening,
      restaurantPhone: this.currentrestaurant.restaurantPhone,
      restaurantType:this.currentrestaurant.restaurantType,
      restaurantClosing:this.currentrestaurant.restaurantClosing,
     // restaurantBranches:this.currentrestaurant.restaurantBranches
    };
 
    if (this.currentrestaurant.id) {
      this.restService.update(this.currentrestaurant.id, data)
        .then(() =>this.message = 'Restaurant updated successfully!')
        
        .catch(err => console.log(err));
    }
  }


  deleteRestaurant(): void {
    var response=confirm('Are You Sure to delete this Restaurant');
    if(response)
    {
    if (this.currentrestaurant.id) {
      this.restService.delete(this.currentrestaurant.id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'Restaurant deleted successfully!';
        })
        .catch(err => console.log(err));
    }
  }
  }
}
