import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products-shop',
  templateUrl : "./products-shop.component.html"

})
export class ProductsShopComponent implements OnInit {
  product : Product | undefined ={
    id:2,
    title:"Nike Jordan 2",
    price:159.99,
    category:"shoes",
    description:"Description",
    image:".../../../../../assets/img/jean-featured-1.png",
  };
  @Output() addToCard = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onAddToCart():void{
    this.addToCard.emit(this.product)
  }

}
