import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl : "./cart.component.html"
})
export class CartComponent implements OnInit {
    cart:Cart = {
      items:[{
      img: "../../../../assets/img/jean-featured-1.png",
      name: "Nike Jordan",
      price: 149.99,
      quantity: 1,
      id: 1
      },{
        img: "../../../../assets/img/jean-featured-1.png",
        name: "Nike Jordan",
        price: 149.99,
        quantity: 1,
        id: 2
        }] 
    }
    dataSource:Array<CartItem> =[];
    
    displayedColumns : Array<string> = [
      "img",
      "name",
      "price",
      "quantity",
      "total",
      "action"
    ]
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
     this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = _cart.items;
    });
  }
  getTotal(items: CartItem[]): number {
    return this.cartService.getTotal(items);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }
  onRemoveFromCart(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }

  onAddQuantity(item: CartItem): void {
    this.cartService.addToCart(item);
  }

  onRemoveQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item);
  }

}
