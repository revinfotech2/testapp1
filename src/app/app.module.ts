import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {HttpClientModule} from '@angular/common/http';
import { Test2Component } from './test2/test2.component';
import { MyfilterPipe } from './myfilter.pipe';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    MyfilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
