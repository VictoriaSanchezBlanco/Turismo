import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EndGamePage } from './end-game.page';

const routes: Routes = [
  {
    path: '',
    component: EndGamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EndGamePageRoutingModule {}
