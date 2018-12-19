import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemsService } from 'src/app/items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-electronics-items',
  templateUrl: './electronics-items.component.html',
  styleUrls: ['./electronics-items.component.css']
})
export class ElectronicsItemsComponent implements OnInit {

  elItems: Item[];

  constructor(private itemsService: ItemsService, private router: Router) { }

  ngOnInit() {
    this.itemsService.getElectroItems()
        .subscribe((response) => {
          this.elItems = response;
        });
  }

  saveToCart(order) {
    this.itemsService.saveCart(order);
    this.router.navigate(['shopping-cart']);
  }

}
