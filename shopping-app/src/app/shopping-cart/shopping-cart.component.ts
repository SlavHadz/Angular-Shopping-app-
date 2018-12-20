import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItems = [];
  cartCleared = false;

  constructor(private itemsService: ItemsService, private router: Router) { }

  ngOnInit() {
    this.cartItems = this.itemsService.getCart();
    if (this.cartItems) {
      this.cartCleared = false;
    } else {
      this.cartCleared = true;
    }
    console.log(this.cartItems);
  }

  deleteCart() {
    this.itemsService.clearCart();
    this.cartCleared = true;
    this.cartItems = [];
  }

  makeOrder() {
    this.router.navigate(['order']);
  }

}
