import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingRunListComponent } from './upcoming-run-list.component';

describe('UpcomingRunListComponent', () => {
  let component: UpcomingRunListComponent;
  let fixture: ComponentFixture<UpcomingRunListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingRunListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingRunListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
