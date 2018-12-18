import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemsService } from 'src/app/items.service';

@Component({
  selector: 'app-anime-items',
  templateUrl: './anime-items.component.html',
  styleUrls: ['./anime-items.component.css']
})
export class AnimeItemsComponent implements OnInit {

  animeItems: Item[];

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.itemsService.getAniItems()
      .subscribe((response) => {
        this.animeItems = response;
      });
  }


}
