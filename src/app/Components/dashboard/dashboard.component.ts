import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from 'src/app/Services/admin-auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public adminAuth:AdminAuthService) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('adminId'));
  }

}
