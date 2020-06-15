import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsModelModule } from '../widgets-model/widgets-model.module'



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserModelModule {
  widgets: WidgetsModelModule[];
  id: string;

}
