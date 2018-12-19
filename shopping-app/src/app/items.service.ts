import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  _aniItemsUrl = 'http://localhost:3001/api/anime';
  _elItemsUrl = 'http://localhost:3001/api/electronics';
  _sportsItemsUrl = 'http://localhost:3001/api/sports';

  orderItems;

  constructor(private http: HttpClient, private router: Router) { }

  getAniItems() {
    return this.http.get<any>(this._aniItemsUrl);
  }

  getElectroItems() {
    return this.http.get<any>(this._elItemsUrl);
  }

  getSportsItems() {
    return this.http.get<any>(this._sportsItemsUrl);
  }

  saveCart(order) {
    const cartValue = localStorage.getItem('cart');
    console.log(cartValue);
    if (!cartValue) {
      this.orderItems = [order];
      localStorage.setItem('cart', JSON.stringify(this.orderItems));
    } else {
      this.orderItems = JSON.parse(cartValue);
      this.orderItems.push(order);
      localStorage.setItem('cart', JSON.stringify(this.orderItems));
      console.log(this.orderItems);
    }
  }

  getCart() {
    return JSON.parse(localStorage.getItem('cart'));
  }

  clearCart() {
    localStorage.removeItem('cart');
  }
}
