import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedRunListComponent } from './feed-run-list.component';

describe('FeedRunListComponent', () => {
  let component: FeedRunListComponent;
  let fixture: ComponentFixture<FeedRunListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedRunListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedRunListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
