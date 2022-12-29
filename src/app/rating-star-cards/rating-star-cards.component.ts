import { Component, Input, OnInit } from '@angular/core';
import { RatingBox } from '../common';

@Component({
  selector: 'app-rating-star-cards',
  templateUrl: './rating-star-cards.component.html',
  styleUrls: ['./rating-star-cards.component.scss']
})
export class RatingStarCardsComponent implements OnInit {
  @Input() ratingStars: RatingBox[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
