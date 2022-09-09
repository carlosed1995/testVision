import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoelementComponent } from './infoelement.component';

describe('InfoelementComponent', () => {
  let component: InfoelementComponent;
  let fixture: ComponentFixture<InfoelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoelementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
