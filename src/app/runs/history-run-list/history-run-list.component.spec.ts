import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryRunListComponent } from './history-run-list.component';

describe('HistoryRunListComponent', () => {
  let component: HistoryRunListComponent;
  let fixture: ComponentFixture<HistoryRunListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryRunListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryRunListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
