import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

   changeEmail=true;
  changePasword=false;
  addressBook=false

  constructor() { }

  ngOnInit(): void {
  }

  show_email(){
    this.changeEmail=true;
    this.changePasword=false;
    this.addressBook=false;
  }

  show_password()
  {
    this.changePasword=true;
    this.changeEmail=false;
    this.addressBook=false;
  }

  show_address(){
    this.addressBook=true;
    this.changeEmail=false;
    this.changePasword=false;
  }
}
