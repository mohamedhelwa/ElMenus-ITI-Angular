import { Dishes } from "./dishes";

export interface orderData {
    orderID: string;
    restaurantID: number;
    userName: string;
    itemsQuantity: number;
    items?: Dishes[];
    orderDate: string;
    orderStatus: string;
    paymentMethod: string;
    restaurantName: string;
    restaurantImage: string;
    totalPrice: string;
}