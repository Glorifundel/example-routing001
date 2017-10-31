import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import AppRoutingModule from './app.routing.module';

import { OneModule } from './routes/one/module';
import { TwoModule } from './routes/two/module';
import { ThreeModule } from './routes/three/module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    OneModule,
    TwoModule,
    ThreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
