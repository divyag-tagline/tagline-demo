import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterServicesSectionComponent } from './footer-services-section.component';

describe('FooterServicesSectionComponent', () => {
  let component: FooterServicesSectionComponent;
  let fixture: ComponentFixture<FooterServicesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterServicesSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterServicesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
