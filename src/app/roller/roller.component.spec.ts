import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollerComponent } from './roller.component';

describe('RollerComponent', () => {
  let component: RollerComponent;
  let fixture: ComponentFixture<RollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RollerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
