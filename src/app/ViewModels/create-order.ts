import { Dishes } from "./dishes";

export interface CreateOrder {
    orderID: string;
    restaurantID: string;
    userName: string;
    itemsQuantity: number;
    items:Dishes[];
    orderDate: string;
    orderStatus: string;
    paymentMethod: string;
    restaurantName?: string;
    restaurantImage?: string;
    totalPrice: number;
    uid:string;
    orderAddress:{
        addressInfo:string,
        builldingNumber:string,
        floorNumber:string,
        ApartNumber:string,
    },
    userPhone:string
}
