import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dev2Component } from './dev2.component';

describe('Dev2Component', () => {
  let component: Dev2Component;
  let fixture: ComponentFixture<Dev2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dev2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dev2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});