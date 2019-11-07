import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowItemMetadataComponent } from './show-item-metadata.component';

describe('ShowItemMetadataComponent', () => {
  let component: ShowItemMetadataComponent;
  let fixture: ComponentFixture<ShowItemMetadataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowItemMetadataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowItemMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
