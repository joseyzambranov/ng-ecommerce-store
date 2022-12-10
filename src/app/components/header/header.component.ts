import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: "./header.component.html",
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  flag = false;
  dark = false;
  public selected = false;
  public sections = 4;
  public scroll! : number;
  private _cart : Cart={items:[]}
  itemsQuantity = 0 

  @Input()
  get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;

    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((prev, curent) => prev + curent, 0);
  }

  constructor(
    private cartService: CartService,   
    private renderer: Renderer2,
   
  ) { }

  ngOnInit() {
    this.renderer.listen(window, 'scroll', ($event) => {
      this.scroll = (window.scrollY / this.sections);
  })
  }

  showMenu(){
    this.flag = !this.flag;
  }
  removeMenu(){
    this.flag = false;      
  }
  darkTheme(){
    this.dark = !this.dark;
    if(this.dark){
      this.renderer.addClass(document.body, 'dark-theme'); 
    }else{
      this.renderer.removeClass(document.body, 'dark-theme');
    }    
  }

  getTotal(items: CartItem[]): number {
    return this.cartService.getTotal(items);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }

}
