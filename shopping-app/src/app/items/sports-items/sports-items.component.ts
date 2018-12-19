import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemsService } from 'src/app/items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sports-items',
  templateUrl: './sports-items.component.html',
  styleUrls: ['./sports-items.component.css']
})
export class SportsItemsComponent implements OnInit {

  sportsItems: Item[];

  constructor(private itemsService: ItemsService, private router: Router) { }

  ngOnInit() {
    this.itemsService.getSportsItems()
        .subscribe((response) => {
          this.sportsItems = response;
        });
  }

  saveToCart(order) {
    this.itemsService.saveCart(order);
    this.router.navigate(['shopping-cart']);
  }

}
