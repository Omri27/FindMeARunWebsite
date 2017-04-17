import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunThumbnailComponent } from './run-thumbnail.component';

describe('RunThumbnailComponent', () => {
  let component: RunThumbnailComponent;
  let fixture: ComponentFixture<RunThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
