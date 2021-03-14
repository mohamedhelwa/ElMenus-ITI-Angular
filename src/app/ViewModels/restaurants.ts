export class Restaurants {
  logo?:string;
  adress?:string;
  id?:string;
  restaurantName?: string;
  restaurantBranchs?: string[];
  restaurantClosing?: string;
  restaurantOpening?: string;
  restaurantPhone?: string;
  restaurantType?: string;
  restaurantFeaturedPhotos?: string[];
  reviews?: number =0;
  rate?: number=0;

  /*constructor(
    id:string,
    restaurantName: string,
    restaurantBranches: string[],
    restaurantClosingTime: string,
    restaurantOpiningTime: string,
    restaurantPhone: string,
    restaurantType: string,
    restaurantFeaturedPhotos: string[]
  ) {
    this.id=id;
    this.restaurantName = restaurantName;
    this.restaurantBranches = restaurantBranches;
    this.restaurantClosingTime = restaurantClosingTime;
    this.restaurantOpiningTime = restaurantOpiningTime;
    this.restaurantPhone = restaurantPhone;
    this.restaurantType = restaurantType;
    this.restaurantFeaturedPhotos = restaurantFeaturedPhotos;
  }*/
}
