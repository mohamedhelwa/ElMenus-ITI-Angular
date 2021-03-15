import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DishesService } from 'src/app/Services/dishes.service';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { RestaurantsServiceService } from '../../Services/restaurants-service.service';
import { Restaurants } from 'src/app/ViewModels/restaurants';

@Component({
  selector: 'app-add-menu-dashboard',
  templateUrl: './add-menu-dashboard.component.html',
  styleUrls: ['./add-menu-dashboard.component.scss']
})
export class AddMenuDashboardComponent implements OnInit {
  public imagePath;
  imgURL: any;
  public message: string;
  title = "cloudsSorage";
  selectedFile: File = null;
  downloadURL: Observable<string>;
  clicked = false;
  fbase;

  selectedRestID: string = "";
  restaurantsList: Restaurants[] = [];

  constructor(private fb: FormBuilder,
    private dishService: DishesService,
    private router: Router,
    private storage: AngularFireStorage,
    private restaurantsService: RestaurantsServiceService) { }

  menuForm = this.fb.group({
    dishName: ["", [
      Validators.required,
      Validators.pattern("^[a-zA-Z_ ]{3,}$"),
    ],
    ],
    dishName_ar: ["", [
      Validators.required,
    ],
    ],
    dishPrice: ["",
      [
        Validators.required,//[0-9]
        Validators.pattern("^([0-9]*)\.[0-9]+$"),
      ],
    ],
    dishSize: ["",
      [
        Validators.required,
        Validators.pattern("^[a-zA-Z_ ]{3,}$"),
      ],
    ],

    dishSize_ar: ["",
      [
        Validators.required,
      ],
    ],
    dishDescription: ["",
      [
        Validators.required,
        Validators.pattern("^[a-zA-Z_ ]{3,}$"),
      ],
    ],
    dishDescription_ar: ["",
      [
        Validators.required,
      ],
    ],
    dishRate: [""],
    dishImage: [""],
    restId: [""]
  });

  ngOnInit(): void {
    this.retrieveRestaurants();
  }

  retrieveRestaurants(): void {
    this.restaurantsService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.restaurantsList = data;
      // console.log(this.restaurantsList);
    });
  }

  addMenu() {
    //alert('click');
    const data = {
      dishName: this.menuForm.value.dishName,
      dishPrice: this.menuForm.value.dishPrice,
      dishSize: this.menuForm.value.dishSize,
      dishDescription: this.menuForm.value.dishDescription,
      dishRate: '',
      dishImage: this.fbase,
      restaurantId: this.selectedRestID,

      dishName_ar: this.menuForm.value.dishName_ar,
      dishSize_ar: this.menuForm.value.dishSize_ar,
      dishDescription_ar: this.menuForm.value.dishDescription_ar,

    };
    this.dishService.addDish(data).then(() => {
      console.log('Created new Menu successfully!');
      this.router.navigate(['/dashboard/menulist']);
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
              this.fbase = url;
              this.clicked = false;
            }
            console.log(this.fbase);
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
