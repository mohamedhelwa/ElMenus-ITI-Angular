import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noorders',
  templateUrl: './noorders.component.html',
  styleUrls: ['./noorders.component.scss']
})
export class NoordersComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToDelivery(){
    this.router.navigate(['delivery']);
  }

}
