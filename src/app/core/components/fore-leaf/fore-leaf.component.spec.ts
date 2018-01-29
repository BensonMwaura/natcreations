import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeLeafComponent } from './fore-leaf.component';

describe('ForeLeafComponent', () => {
  let component: ForeLeafComponent;
  let fixture: ComponentFixture<ForeLeafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForeLeafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeLeafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
