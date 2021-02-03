import { HomeService } from './../../Services/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  searchData:[] =[];
  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    // this.searchData = this.homeService.getData();
    // console.log("testform Home" + this.searchData);   
    
    // this.homeService.getData();
    console.log("restaurant Name: "+this.homeService.restName);
    console.log("restaurant Branch: "+this.homeService.selBranch);
    
  }

}
