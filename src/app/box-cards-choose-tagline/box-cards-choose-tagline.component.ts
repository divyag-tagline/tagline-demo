import { Component, Input, OnInit } from '@angular/core';
import { Empowerbox } from '../common';

@Component({
  selector: 'app-box-cards-choose-tagline',
  templateUrl: './box-cards-choose-tagline.component.html',
  styleUrls: ['./box-cards-choose-tagline.component.scss']
})
export class BoxCardsChooseTaglineComponent implements OnInit {
  @Input() boxCards: Empowerbox[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
