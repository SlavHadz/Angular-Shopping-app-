import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemsService } from 'src/app/items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anime-items',
  templateUrl: './anime-items.component.html',
  styleUrls: ['./anime-items.component.css']
})
export class AnimeItemsComponent implements OnInit {

  animeItems: Item[];

  constructor(private itemsService: ItemsService, private router: Router) { }

  ngOnInit() {
    this.itemsService.getAniItems()
      .subscribe((response) => {
        this.animeItems = response;
      });
  }

  saveToCart(order) {
    this.itemsService.saveCart(order);
    this.router.navigate(['shopping-cart']);
  }


}
