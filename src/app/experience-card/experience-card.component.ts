import { Component, Input, OnInit } from '@angular/core';
import { ExperienceDetailsRight } from '../common';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent implements OnInit {
@Input() expProfessional : ExperienceDetailsRight[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
