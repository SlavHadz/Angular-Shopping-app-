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
  cartPrize = 0;

  constructor(private itemsService: ItemsService, private router: Router) { }

  ngOnInit() {
    this.cartItems = this.itemsService.getCart();
    if (this.cartItems) {
      this.cartCleared = false;
    } else {
      this.cartCleared = true;
    }
  }

  deleteCart() {
    this.itemsService.clearCart();
    this.cartCleared = true;
    this.cartItems = [];
  }

  makeOrder() {
    this.router.navigate(['order']);
  }

  fullPrize () {
    this.cartPrize = 0;
    const items = this.itemsService.getCart();
    // tslint:disable-next-line:forin
    for (const item in items) {
      // tslint:disable-next-line:prefer-const
      let itemPrize = +(items[item].prize.substr(1));
      this.cartPrize += itemPrize;
    }
    return '$' + this.cartPrize;
  }

}
