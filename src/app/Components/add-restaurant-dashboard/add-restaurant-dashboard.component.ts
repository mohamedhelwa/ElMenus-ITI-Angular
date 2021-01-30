import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { RestaurantsServiceService } from 'src/app/Services/restaurants-service.service';
import { Restaurants } from 'src/app/ViewModels/restaurants';
import {  finalize } from "rxjs/operators";
import { Observable } from "rxjs";
@Component({
  selector: 'app-add-restaurant-dashboard',
  templateUrl: './add-restaurant-dashboard.component.html',
  styleUrls: ['./add-restaurant-dashboard.component.scss']
})
export class AddRestaurantDashboardComponent implements OnInit {

    restaurant: Restaurants = new Restaurants();  
  // message="";
   
    public imagePath;
  imgURL: any;
  public message: string;
  title = "cloudsSorage";
  selectedFile: File = null;
  fb;
  downloadURL: Observable<string>;
  clicked=false;
  constructor(private storage: AngularFireStorage,private ord:RestaurantsServiceService , private router:Router) 
  { 
    
  }

  ngOnInit(): void {
  }

  Add()
  {
    const data = {
      restaurantName : this.restaurant.restaurantName,
      restaurantOpening: this.restaurant.restaurantOpening,
      restaurantPhone: this.restaurant.restaurantPhone,
      restaurantType:this.restaurant.restaurantType,
      restaurantClosing:this.restaurant.restaurantClosing,
      restaurantBranchs: this.restaurant.restaurantBranchs =[String(this.restaurant.restaurantBranchs)],
      restaurantFeaturedPhotos: this.restaurant.restaurantFeaturedPhotos=this.fb };
    this.ord.create(data).then(() => {
      console.log('Created new item successfully!');
      this.router.navigate(['/showrestaurants']);
    // this.message="succussfully";
    });
  }

  

  onFileSelected(event,files) {
    this.clicked=true
    //////////////
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
      //console.log(this.imagePath.name)
       console.log("done")
    }
    //////////////
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `/Images/restaurants_images/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`/Images/restaurants_images/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
              this.clicked=false;
            }
            console.log(this.fb);
            console.log("url");
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
          console.log("url2");
        }
      }); 
  }
}
