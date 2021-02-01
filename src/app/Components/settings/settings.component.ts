import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

<<<<<<< HEAD
   changeEmail=true;
  changePasword=false;
  addressBook=false

=======
>>>>>>> 7523fe8cd85162d284ed7592c36cae778b135a43
  constructor() { }

  ngOnInit(): void {
  }

<<<<<<< HEAD
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
=======
>>>>>>> 7523fe8cd85162d284ed7592c36cae778b135a43
}
