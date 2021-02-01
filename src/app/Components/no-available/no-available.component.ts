import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-available',
  templateUrl: './no-available.component.html',
  styleUrls: ['./no-available.component.scss']
})
export class NoAvailableComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onChange(checked:boolean)
  {
    if(!checked){
      this.route.navigate(['/delivery']);
    }
  }
}
