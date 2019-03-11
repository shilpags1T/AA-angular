import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSubMenuComponent } from './left-sub-menu.component';

describe('LeftSubMenuComponent', () => {
  let component: LeftSubMenuComponent;
  let fixture: ComponentFixture<LeftSubMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftSubMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSubMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
