import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryRunDetailsComponent } from './history-run-details.component';

describe('HistoryRunDetailsComponent', () => {
  let component: HistoryRunDetailsComponent;
  let fixture: ComponentFixture<HistoryRunDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryRunDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryRunDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
