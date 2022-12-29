import { Component, Input, OnInit } from '@angular/core';
import { TechnologyBackEnd } from '../common';

@Component({
  selector: 'app-technology-front-end-icon',
  templateUrl: './technology-front-end-icon.component.html',
  styleUrls: ['./technology-front-end-icon.component.scss']
})
export class TechnologyFrontEndIconComponent implements OnInit {
  @Input() technologyFrontEndIcon: TechnologyBackEnd[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
