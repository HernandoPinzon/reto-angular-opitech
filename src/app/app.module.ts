import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsianfoodModule } from './asianfood/asianfood.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AsianfoodModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
