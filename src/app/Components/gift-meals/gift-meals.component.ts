import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-gift-meals',
  templateUrl: './gift-meals.component.html',
  styleUrls: ['./gift-meals.component.scss']
})
export class GiftMealsComponent implements OnInit {
  lang:string;

  constructor(public translate: TranslateService) {
    this.lang = localStorage.getItem('currentLang') || 'en';
    this.translate.use(this.lang);
   }

  ngOnInit(): void {
  }

}
