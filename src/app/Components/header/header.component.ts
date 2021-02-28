import { Component, OnInit } from "@angular/core";
import { ViewChild, ElementRef } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { AuthService } from "src/app/Services/auth.service";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  nav_after_login = false;
  nav_before_login = true;
  lang:string;
  @ViewChild("close") closeAddExpenseModal: ElementRef = new ElementRef(
    "button"
  );

  constructor(public translate: TranslateService, public auth: AuthService) {
    // translate.addLangs(['en', 'ar']);
    // translate.setDefaultLang('en');
    this.lang = localStorage.getItem('currentLang') || 'en';
    this.translate.use(this.lang);
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit(): void {}

  // login()
  // {
  //  this.nav_after_login=true;
  //   this.nav_before_login=false;
  //   this.closeAddExpenseModal.nativeElement.click();

  // }
}
