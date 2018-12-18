import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimeItemsComponent } from './anime-items/anime-items.component';
import { SportsItemsComponent } from './sports-items/sports-items.component';
import { ElectronicsItemsComponent } from './electronics-items/electronics-items.component';

const routes: Routes = [
  {path: '', redirectTo: 'anime', pathMatch: 'full'},
  {path: 'anime', component: AnimeItemsComponent},
  {path: 'sports', component: SportsItemsComponent},
  {path: 'electronics', component: ElectronicsItemsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
