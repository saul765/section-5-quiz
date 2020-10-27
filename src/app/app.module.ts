import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameControllComponent } from './game-controll/game-controll.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import {FormsModule} from '@angular/forms';
import { MixedNumbersComponent } from './mixed-numbers/mixed-numbers.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControllComponent,
    OddComponent,
    EvenComponent,
    MixedNumbersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
