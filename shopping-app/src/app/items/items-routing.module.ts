import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { AnimeItemsComponent } from './anime-items/anime-items.component';
import { SportsItemsComponent } from './sports-items/sports-items.component';
import { ElectronicsItemsComponent } from './electronics-items/electronics-items.component';

const routes: Routes = [
  {path: '', redirectTo: 'all', pathMatch: 'full'},
  {path: 'all', component: ItemsComponent},
  {path: 'anime', component: AnimeItemsComponent},
  {path: 'sports', component: SportsItemsComponent},
  {path: 'electronics', component: ElectronicsItemsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
