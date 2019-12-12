import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMotionItemComponent } from './show-motion-item.component';

describe('ShowMotionItemComponent', () => {
  let component: ShowMotionItemComponent;
  let fixture: ComponentFixture<ShowMotionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMotionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMotionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
