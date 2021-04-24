import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LodaingComponent } from './lodaing.component';

describe('LodaingComponent', () => {
  let component: LodaingComponent;
  let fixture: ComponentFixture<LodaingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LodaingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LodaingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
