export interface Cart {
    items: Array<CartItem>;
  }
  
  export interface CartItem {
    img: string;
    name: string;
    price: number;
    quantity: number;
    id: number;
  }