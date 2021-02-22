import { HomeService } from './../../Services/home.service';
import { Component, OnInit, Input  } from '@angular/core';
//import { Dishes } from 'src/app/ViewModels/dishes';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  // searchData:[] =[];
  //@Input() menu: Dishes;
  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    // this.searchData = this.homeService.getData();
    // console.log("testform Home" + this.searchData);   
    
    // this.homeService.getData();
    // console.log("restaurant Name: "+this.homeService.restName);
    // console.log("restaurant Branch: "+this.homeService.selBranch);
    //console.log("test", this.menu);
    
    
  }

}
