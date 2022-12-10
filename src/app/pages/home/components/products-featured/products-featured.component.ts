import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products-featured',
  templateUrl:"./products-featured.component.html"
})
export class ProductsFeaturedComponent implements OnInit {
  product : Product | undefined ={
    id:1,
    title:"Nike Jordan",
    price:149.99,
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
