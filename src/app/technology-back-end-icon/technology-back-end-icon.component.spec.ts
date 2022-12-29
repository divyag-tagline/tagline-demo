import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyBackEndIconComponent } from './technology-back-end-icon.component';

describe('TechnologyBackEndIconComponent', () => {
  let component: TechnologyBackEndIconComponent;
  let fixture: ComponentFixture<TechnologyBackEndIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechnologyBackEndIconComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TechnologyBackEndIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
