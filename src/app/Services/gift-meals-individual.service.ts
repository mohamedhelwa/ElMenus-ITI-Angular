import { GiftCard } from './../ViewModels/gift-card';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GiftMealsIndividualService {
  
  giftCardsCollection: AngularFirestoreCollection<GiftCard>;
  giftCards: Observable<GiftCard[]>;
  // GiftCardDoc: AngularFirestoreDocument<GiftCard>|any; 

  giftValue: string = "";
  promoName: string = "";
  phoneNumber: string = "";
  recPhoneNumber: string = "";

  constructor(private firestore: AngularFirestore) {
    this.giftCardsCollection = this.firestore.collection('giftCardsTest');

    //to get id of each document
    this.giftCards = this.giftCardsCollection.snapshotChanges()
                .pipe(map(changes =>{
                    return changes.map(a => {
                      const data = a.payload.doc.data() as GiftCard;
                      data.id = a.payload.doc.id;
                      return data;
                    })
                  }))
   }


/*   setData(giftValue: string, promoName: string, phoneNumber: string, recPhoneNumber: string) {
    this.giftValue = giftValue;
    this.promoName = promoName;
    this.phoneNumber = phoneNumber;
    this.recPhoneNumber = recPhoneNumber;
  } */
  
/*   getData() {
    return {
      giftValue: this.giftValue,
      promoName: this.promoName,
      phoneNumber: this.phoneNumber,
      recPhoneNumber: this.recPhoneNumber
  }
  } */

  getGiftCards(){
    return this.giftCards;
  }

  setGiftData(form: GiftCard) {
    this.giftCardsCollection.add(form)      
  }

}
