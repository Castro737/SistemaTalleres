import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalleresComponent } from './talleres';

describe('Talleres', () => {
  let component: TalleresComponent;
  let fixture: ComponentFixture<TalleresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalleresComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TalleresComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
