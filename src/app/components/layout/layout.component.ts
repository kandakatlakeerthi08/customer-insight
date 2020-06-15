import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

import { LayoutService, IComponent } from '../../services/layout/layout.service';
import { WidgetsModelModule } from '../../model/widgets-model/widgets-model.module';
import { UserModelModule } from '../../model/user-model/user-model.module';



@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public gridsterConfig: GridsterConfig = {
    draggable: {
      enabled: true,
      stop: function(event, $element, widget) {
        console.log('draggable');
        this.saveInDatabase($element.el.id, event, 'position');
      }.bind(this)
    },
    fixedColWidth: 300,
    pushItems: true,
    resizable: {
      enabled: true
    }
  };
  public userObject: UserModelModule;
  get options(): GridsterConfig {
    return this.gridsterConfig;
  }
   public layout: GridsterItem[] = [];
   public userEmail = 'keerthi@virtusa.com'

  get components(): IComponent[] {
    return this.layoutService.components;
  }
  constructor(
    public layoutService: LayoutService
  ) { }
  ngOnInit(): void {
    this.layoutService.getAllWidgetFromServer(this.userEmail)
      .subscribe((data: UserModelModule) =>
    {
      this.userObject = data;
      this.layout = this.userObject.widgets as GridsterItem[];
    });
  }

  saveInDatabase(id, event, position): void{
    console.log(event);
    const index  = this.layout.findIndex(item => item.id === event.id)
    this.layout.splice(index, 1, event);
    this.userObject.widgets = this.layout as WidgetsModelModule[];
    this.layoutService.updateAllwidgets( this.userObject , this.userEmail);
    console.log(this.layout);
  }


}
