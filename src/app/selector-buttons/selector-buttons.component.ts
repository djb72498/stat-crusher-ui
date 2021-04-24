import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selector-buttons',
  templateUrl: './selector-buttons.component.html',
  styleUrls: ['./selector-buttons.component.css']
})
export class SelectorButtonsComponent implements OnInit {

  @Input() options: any[] = [];
  @Input() selection: any = [];

  @Output() selectionChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
