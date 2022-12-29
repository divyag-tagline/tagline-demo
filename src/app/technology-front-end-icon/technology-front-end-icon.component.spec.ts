import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyFrontEndIconComponent } from './technology-front-end-icon.component';

describe('TechnologyFrontEndIconComponent', () => {
  let component: TechnologyFrontEndIconComponent;
  let fixture: ComponentFixture<TechnologyFrontEndIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologyFrontEndIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologyFrontEndIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
