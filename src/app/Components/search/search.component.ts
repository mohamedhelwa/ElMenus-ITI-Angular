import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { SearchService } from 'src/app/Services/search.service';
import { Restaurants } from 'src/app/ViewModels/restaurants';
import { HomeService } from '../../Services/home.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  restName:string = '';
  selBranch: string = '';
  resturantsList:Restaurants[];
  constructor(private searchService:SearchService,
              private location: Location,
              private route: Router,
              private homeService:HomeService) { }

  ngOnInit(): void {
   
   
   this.restName = this.homeService.restName;
   this.selBranch = this.homeService.selBranch;
   console.log("restaurant Name: "   +  this.restName);
   console.log("restaurant Branch: " +  this.selBranch);

   this.getAllResturants(this.restName,this.selBranch);
  }

  getAllResturants(name:string,branch:string){
    this.searchService.getAllResturants(name,branch).snapshotChanges().pipe(
      map( changes =>
        changes.map(o =>
        (console.log({...o.payload.doc.data()}),
          {id: o.payload.doc.id, ...o.payload.doc.data()})
        )
      )
    ).subscribe(resturants => 
      this.resturantsList = resturants
    )
    console.log(this.resturantsList)
  }

  goResturant(id:string){
    this.route.navigate(['/resturant/menu/'+(id)]);
  }
}
