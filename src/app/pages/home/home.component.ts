import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl:"./home.component.html"
})
export class HomeComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      img: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id,
    });
  }

}
