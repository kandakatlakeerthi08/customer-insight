import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { GridsterModule } from 'angular-gridster2';
import { Example1Component } from './components/example1/example1.component';
import { Example2Component } from './components/example2/example2.component';
import { HttpClientModule } from '@angular/common/http';
import { WidgetComponentComponent } from './components/widget-component/widget-component.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    WidgetComponentComponent,
  ],
  imports: [
    BrowserModule,
    GridsterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    Example1Component,
    Example2Component
  ]
})


export class AppModule { }
