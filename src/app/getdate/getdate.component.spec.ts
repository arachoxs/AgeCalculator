import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetdateComponent } from './getdate.component';

describe('GetdateComponent', () => {
  let component: GetdateComponent;
  let fixture: ComponentFixture<GetdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
