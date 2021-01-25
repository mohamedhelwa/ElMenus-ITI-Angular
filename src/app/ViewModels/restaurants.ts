export class Restaurants {
  restaurantName: string;
  restaurantBranches: string[];
  restaurantClosingTime: string;
  restaurantOpiningTime: string;
  restaurantPhone: string;
  restaurantType: string;
  restaurantFeaturedPhotos: string[];

  constructor(
    restaurantName: string,
    restaurantBranches: string[],
    restaurantClosingTime: string,
    restaurantOpiningTime: string,
    restaurantPhone: string,
    restaurantType: string,
    restaurantFeaturedPhotos: string[]
  ) {
    this.restaurantName = restaurantName;
    this.restaurantBranches = restaurantBranches;
    this.restaurantClosingTime = restaurantClosingTime;
    this.restaurantOpiningTime = restaurantOpiningTime;
    this.restaurantPhone = restaurantPhone;
    this.restaurantType = restaurantType;
    this.restaurantFeaturedPhotos = restaurantFeaturedPhotos;
  }
}
