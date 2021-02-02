import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { SearchService } from 'src/app/Services/search.service';
import { Restaurants } from 'src/app/ViewModels/restaurants';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  resturantsList:Restaurants[];
  constructor(private searchService:SearchService) { }

  ngOnInit(): void {
   this.getAllResturants();
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
