import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditsDetailComponent } from './reddits-detail.component';

describe('RedditsDetailComponent', () => {
  let component: RedditsDetailComponent;
  let fixture: ComponentFixture<RedditsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
