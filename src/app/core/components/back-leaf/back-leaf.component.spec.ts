import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackLeafComponent } from './back-leaf.component';

describe('BackLeafComponent', () => {
  let component: BackLeafComponent;
  let fixture: ComponentFixture<BackLeafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackLeafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackLeafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
