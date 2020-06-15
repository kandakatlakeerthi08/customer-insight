import { Injectable } from '@angular/core';

import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { UUID } from 'angular2-uuid';
import {WidgetsModelModule} from '../../model/widgets-model/widgets-model.module';
import { UserModelModule } from '../../model/user-model/user-model.module';
import { RestApiService } from '../rest/rest-api.service';
import {Observable} from 'rxjs';

export interface IComponent {
  id: string;
  componentRef: string;
}
@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  public options: GridsterConfig = {
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
  public layout: GridsterItem[] = [];
  public components: IComponent[] = [];
  dropId: string;

  constructor(private restApiService: RestApiService) { }
  addItem(): void {
    this.layout.push({
      cols: 5,
      id: UUID.UUID(),
      rows: 5,
      x: 0,
      y: 0
    });
  }

  deleteItem(id: string): void {
    const item = this.layout.find(d => d.id === id);
    this.layout.splice(this.layout.indexOf(item), 1);
    const comp = this.components.find(c => c.id === id);
    this.components.splice(this.components.indexOf(comp), 1);
  }

  setDropId(dropId: string): void {
    this.dropId = dropId;
  }
  dropItem(dragId: string): void {
    const { components } = this;
    const comp: IComponent = components.find(c => c.id === this.dropId);
    const updateIdx: number = comp ? components.indexOf(comp) : components.length;
    const componentItem: IComponent = {
      id: this.dropId,
      componentRef: dragId
    };
    this.components = Object.assign([], components, { [updateIdx]: componentItem });
  }
  getComponentRef(id: string): string {
    const comp = this.components.find(c => c.id === id);
    return comp ? comp.componentRef : null;
  }
  updateAllwidgets(widgets: UserModelModule, id: string): void{
      this.restApiService.update(widgets, id);
  }

  getAllWidgetFromServer(id: string ): Observable<UserModelModule>{
    return this.restApiService.getAllById(id);
  }
}

