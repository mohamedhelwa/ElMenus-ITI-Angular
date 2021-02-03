import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { SearchService } from 'src/app/Services/search.service';
import { Restaurants } from 'src/app/ViewModels/restaurants';
import { HomeService } from '../../Services/home.service';

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
              private homeService:HomeService) { }

  ngOnInit(): void {
   this.getAllResturants();
   
   this.restName = this.homeService.restName;
   this.selBranch = this.homeService.selBranch;
   console.log("restaurant Name: "   +  this.restName);
   console.log("restaurant Branch: " +  this.selBranch);
  }

  getAllResturants(){
    this.searchService.getAllResturants().snapshotChanges().pipe(
      map( changes =>
        changes.map(o =>
        (console.log({...o.payload.doc.data()}),
          {...o.payload.doc.data()})
        )
      )
    ).subscribe(resturants => 
      this.resturantsList = resturants
    )
  }
}
