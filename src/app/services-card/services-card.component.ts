import { Component, Input, OnInit } from '@angular/core'
import { ServiceCard2 } from '../common';

@Component({
  selector: 'app-services-card',
  templateUrl: './services-card.component.html',
  styleUrls: ['./services-card.component.scss']
})
export class ServicesCardComponent implements OnInit {
  @Input() services:ServiceCard2[] = [];
  constructor() { }


  ngOnInit(): void {
  }

}
