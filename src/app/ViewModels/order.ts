export class Order {
  orderID: number;
  restaurantID: number;
  userName: string;
  itemsQuantity: number;
  items: [
    {
      itemName: string,
      itemPrice: string,
      itemQuantity: number,
      itemSize: string
    }
  ];
  orderDate: string;
  orderStatus: string;
  paymentMethod: string;
  restaurantName: string;
  restaurantImage: string;
  totalPrice: number;

  constructor(
    orderID: number,
    restaurantID: number,
    userName: string,
    itemsQuantity: number,
    items: [
      {
        itemName: "",
        itemPrice: "",
        itemQuantity: 0,
        itemSize: ""
      }
    ],
    orderDate: string,
    orderStatus: string,
    paymentMethod: string,
    restaurantName: string,
    restaurantImage: string,
    totalPrice: number
  ) {

    this.orderID = orderID;
    this.restaurantName = restaurantName;
    this.restaurantID = restaurantID;
    this.userName = userName;
    this.itemsQuantity = itemsQuantity;
    this.items = items;
    this.orderDate = orderDate;
    this.orderStatus = orderStatus;
    this.paymentMethod = paymentMethod;
    this.restaurantImage = restaurantImage;
    this.totalPrice = totalPrice;
  }
}
