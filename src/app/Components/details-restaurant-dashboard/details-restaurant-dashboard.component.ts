import { Component, OnInit,Input,Output,EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { RestaurantsServiceService } from 'src/app/Services/restaurants-service.service';
import { Restaurants } from 'src/app/ViewModels/restaurants';
import { FormBuilder, Validators } from '@angular/forms';
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
    adress:'',
    restaurantBranchs:[],
    restaurantFeaturedPhotos:[]

  };
  clientName:string;
  message = '';
  /////////////
  restForm = this.FB.group({
    restname: ["", [
      Validators.required,
      Validators.pattern("^[a-zA-Z_ ]{0,}$"),//^[a-zA-Z_ ]{3,}$
              ],
  ],
    restbranch: ["",
           [
      Validators.required,//[0-9]
      Validators.pattern("^[a-zA-Z_ ]{0,}$"),
              ],
  ],

  restaddres: ["",
  [
Validators.required,//[0-9]
Validators.pattern("^[a-zA-Z_ ]{0,}$"),
     ],
],
    restclose: ["",
            [
      Validators.required,
      Validators.pattern("^([0-9]{2})\.[0-9]+$"),
              ],
  ],

    restopen: ["",
    [
      Validators.required,
      Validators.pattern("^([0-9]{2})\.[0-9]+$"),
              ],
  ],
    restphone: ["",
    Validators.required,
    //Validators.pattern("/(?:^|\D)(\d{5})(?!\d)/g)")
  ],
  restrate:[3],
    resttype: ["",[
      Validators.required,//[0-9]
      Validators.pattern("^[a-zA-Z_ ]{0,}$"),
              ],]

    
  });
  constructor(private FB :FormBuilder,private restService: RestaurantsServiceService) { }
  ngOnChanges(): void {
    this.message = '';
    this.currentrestaurant = { ...this.restaurant };
  }

  ngOnInit(): void {
    this.message = '';
  }

  updateRestaurant(): void {
    const data = {
      /*restaurantName : this.currentrestaurant.restaurantName,
      restaurantOpening: this.currentrestaurant.restaurantOpening,
      restaurantPhone: this.currentrestaurant.restaurantPhone,
      restaurantType:this.currentrestaurant.restaurantType,
      restaurantClosing:this.currentrestaurant.restaurantClosing,
      adress:this.currentrestaurant.adress*/
      // restaurantBranches:this.currentrestaurant.restaurantBranches
    
      restaurantName : this.restForm.value.restname,
      restaurantOpening: this.restForm.value.restopen,
      restaurantPhone:  this.restForm.value.restphone,
      restaurantType: this.restForm.value.resttype,
      restaurantClosing: this.restForm.value.restclose,
      //restaurantBranchs:  this.restForm.value.restbranch =[String( this.restForm.value.restbranch)],
      adress:this.restForm.value.restaddres,
      //rate:this.restForm.value.restrate
  
    };
 
    if (this.currentrestaurant.id) {
      this.restService.update(this.currentrestaurant.id, data)
        .then(() => {
          this.message = 'Restaurant updated successfully!';
          this.refreshList.emit();
        }
          )
        
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
