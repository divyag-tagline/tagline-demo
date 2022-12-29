import { Component, Input, OnInit } from '@angular/core';
import { GlobalPresence } from '../common';

@Component({
  selector: 'app-global-address',
  templateUrl: './global-address.component.html',
  styleUrls: ['./global-address.component.scss']
})
export class GlobalAddressComponent implements OnInit {
  @Input() globalPresence: GlobalPresence[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
