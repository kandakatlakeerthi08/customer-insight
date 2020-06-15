import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridsterItem } from 'angular-gridster2';




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class WidgetsModelModule implements GridsterItem{
  [propName: string]: any;
  cols: number;
  rows: number;
  x: number;
  y: number;
  id: string;
  desc: string;
}
