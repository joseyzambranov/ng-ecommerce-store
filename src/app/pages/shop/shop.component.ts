import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: "shop.component.html"
})
export class ShopComponent implements OnInit {
  showFiller = false;
  constructor(private cartService: CartService){}

  ngOnInit(): void {
  }

  onAddToCarts(product: Product): void {
    this.cartService.addToCart({
      img: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id,
    });
  }

}
