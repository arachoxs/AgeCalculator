import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcdateComponent } from './calcdate.component';

describe('CalcdateComponent', () => {
  let component: CalcdateComponent;
  let fixture: ComponentFixture<CalcdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
