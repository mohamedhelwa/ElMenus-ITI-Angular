import { GiftCard } from './../../ViewModels/gift-card';
import { GiftMealsIndividualService } from './../../Services/gift-meals-individual.service';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-gift-meals-individual",
  templateUrl: "./gift-meals-individual.component.html",
  styleUrls: ["./gift-meals-individual.component.scss"],
})
export class GiftMealsIndividualComponent implements OnInit {
  giftCards: GiftCard[]=[];

  giftCardData: GiftCard|any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private gftMlsService: GiftMealsIndividualService
  ) {}

  giftMealsFrm = this.fb.group({
    giftValue: ["", [Validators.required]],    
    promoName: ["", [Validators.required, Validators.pattern("^[a-zA-Z0-9- ]{3,}(?: [a-zA-Z0-9- ]+){0,2}$")]],    
    phoneNumber: ["", [Validators.required, Validators.pattern("^01[0-9]{9}")]],    
    recPhoneNumber: ["", [Validators.required, Validators.pattern("^01[0-9]{9}")]]
  });

  ngOnInit(): void {
    this.gftMlsService.getGiftCards().subscribe(cards => {
      this.giftCards = cards;
      console.log(this.giftCards);
    })
  }

  submitGift() {
    this.gftMlsService.setGiftData(this.giftMealsFrm.value);
    /* this.gftMlsService.setData(
      this.giftMealsFrm.value.giftValue,
      this.giftMealsFrm.value.promoName,
      this.giftMealsFrm.value.phoneNumber,
      this.giftMealsFrm.value.recPhoneNumber
    ); */
    this.router.navigate(["/Test"]).then(() => {
      // console.log("second Step");      
    });
  }
}
