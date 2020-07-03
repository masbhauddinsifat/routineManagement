import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineMakingComponent } from './routine-making.component';

describe('RoutineMakingComponent', () => {
  let component: RoutineMakingComponent;
  let fixture: ComponentFixture<RoutineMakingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutineMakingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutineMakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
