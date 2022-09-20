import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsianfoodRoutingModule } from './asianfood-routing.module';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    AsianfoodRoutingModule
  ],
  exports: [
    MenuComponent
  ]
})
export class AsianfoodModule { }
