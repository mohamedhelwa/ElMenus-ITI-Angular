import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { RestaurantsServiceService } from 'src/app/Services/restaurants-service.service';
import { Restaurants } from 'src/app/ViewModels/restaurants';
import { finalize } from "rxjs/operators";
import { Observable } from "rxjs";
import { FormBuilder, Validators } from '@angular/forms';
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
  clicked = false;
  pathes_arr;
  ///////////////
  restForm = this.FB.group({
    restname: ["", [
      Validators.required,
      Validators.pattern("^[a-zA-Z_ ]{0,}$"),//^[a-zA-Z_ ]{3,}$
    ],
    ],
    restname_ar: ["", [
      Validators.required,
    ],
    ],
    
    restaddres_ar: ["",
      [
        Validators.required,//[0-9]
      ],
    ],

    resttype_ar: ["", [
      Validators.required,//[0-9]
    ],],


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
        Validators.pattern("^([0-9]{2})\:[0-9]+$"),
      ],
    ],

    restopen: ["",
      [
        Validators.required,
        Validators.pattern("^([0-9]{2})\:[0-9]+$"),
      ],
    ],
    restphone: ["",
      Validators.required,
      //Validators.pattern("/(?:^|\D)(\d{5})(?!\d)/g)")
    ],
    restrate: [3],
    resttype: ["", [
      Validators.required,//[0-9]
      Validators.pattern("^[a-zA-Z_ ]{0,}$"),
    ],]


  });
  //////
  constructor(private FB: FormBuilder, private storage: AngularFireStorage, private rest: RestaurantsServiceService, private router: Router) {

  }

  ngOnInit(): void {
  }

  Add() {
    //alert('click');
    const data = {
      /* restaurantName : this.restaurant.restaurantName,
       restaurantOpening: this.restaurant.restaurantOpening,
       restaurantPhone: this.restaurant.restaurantPhone,
       restaurantType:this.restaurant.restaurantType,
       restaurantClosing:this.restaurant.restaurantClosing,
       restaurantBranchs: this.restaurant.restaurantBranchs =[String(this.restaurant.restaurantBranchs)],
     restaurantFeaturedPhotos: this.restaurant.restaurantFeaturedPhotos=this.fb */

      restaurantName: this.restForm.value.restname,
      restaurantOpening: this.restForm.value.restopen,
      restaurantPhone: this.restForm.value.restphone,
      restaurantType: this.restForm.value.resttype,
      restaurantClosing: this.restForm.value.restclose,
      restaurantBranchs: this.restForm.value.restbranch = [String(this.restForm.value.restbranch)],
      logo: this.fb,
      adress: this.restForm.value.restaddres,
      rate: this.restForm.value.restrate,
      restaurantFeaturedPhotos: this.fb,

      restaurantName_ar: this.restForm.value.restname_ar,
      restaurantType_ar: this.restForm.value.resttype_ar,
      adress_ar: this.restForm.value.restaddres_ar,

    };

    this.rest.create(data).then(() => {
      console.log('Created new item successfully!');
      this.router.navigate(['/dashboard/showrestaurants']);
      // this.message="succussfully";
    });

  }



  onFileSelected(event, files) {
    this.clicked = true
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
              this.clicked = false;
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

  //////////////////FeaturePhotos /////////////

  onFileSelectedFeaturephoto(event, files) {
    this.clicked = true
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
              // this.fb = url;
              this.pathes_arr.push(url);
              this.clicked = false;
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
