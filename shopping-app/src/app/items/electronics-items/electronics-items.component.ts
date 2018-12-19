import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemsService } from 'src/app/items.service';

@Component({
  selector: 'app-electronics-items',
  templateUrl: './electronics-items.component.html',
  styleUrls: ['./electronics-items.component.css']
})
export class ElectronicsItemsComponent implements OnInit {

  elItems: Item[];

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.itemsService.getElectroItems()
        .subscribe((response) => {
          this.elItems = response;
        });
  }

}
