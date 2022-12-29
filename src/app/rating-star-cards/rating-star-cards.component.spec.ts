import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingStarCardsComponent } from './rating-star-cards.component';

describe('RatingStarCardsComponent', () => {
  let component: RatingStarCardsComponent;
  let fixture: ComponentFixture<RatingStarCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RatingStarCardsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RatingStarCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
