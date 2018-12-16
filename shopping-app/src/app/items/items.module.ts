import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { AnimeItemsComponent } from './anime-items/anime-items.component';
import { SportsItemsComponent } from './sports-items/sports-items.component';
import { ElectronicsItemsComponent } from './electronics-items/electronics-items.component';
import { ItemsComponent } from './items/items.component';

@NgModule({
  declarations: [AnimeItemsComponent, SportsItemsComponent, ElectronicsItemsComponent, ItemsComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule
  ]
})
export class ItemsModule { }
