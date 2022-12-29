import { Component, Input, OnInit } from '@angular/core';
import { TechnologyBackEnd } from '../common';

@Component({
  selector: 'app-technology-back-end-icon',
  templateUrl: './technology-back-end-icon.component.html',
  styleUrls: ['./technology-back-end-icon.component.scss']
})
export class TechnologyBackEndIconComponent implements OnInit {
  @Input() technologyBackEndIcon: TechnologyBackEnd[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
