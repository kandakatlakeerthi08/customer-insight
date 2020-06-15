import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-widget-component',
  templateUrl: './widget-component.component.html',
  styleUrls: ['./widget-component.component.scss']
})
export class WidgetComponentComponent implements OnInit {

  @Input() id: string;
  @Input() description: string;
  constructor() { }

  ngOnInit(): void {
  }

}
