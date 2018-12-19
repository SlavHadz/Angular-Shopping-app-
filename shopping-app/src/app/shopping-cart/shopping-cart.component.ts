import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItems = [];

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.cartItems = this.itemsService.getCart();
    console.log(this.cartItems);
  }

  deleteCart() {
    this.itemsService.clearCart();
    this.cartItems = [];
  }

}
