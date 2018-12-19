import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemsService } from 'src/app/items.service';

@Component({
  selector: 'app-sports-items',
  templateUrl: './sports-items.component.html',
  styleUrls: ['./sports-items.component.css']
})
export class SportsItemsComponent implements OnInit {

  sportsItems: Item[];

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.itemsService.getSportsItems()
        .subscribe((response) => {
          this.sportsItems = response;
        });
  }

}
