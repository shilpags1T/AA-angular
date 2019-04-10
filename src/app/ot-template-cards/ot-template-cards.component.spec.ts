import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtTemplateCardsComponent } from './ot-template-cards.component';

describe('OtTemplateCardsComponent', () => {
  let component: OtTemplateCardsComponent;
  let fixture: ComponentFixture<OtTemplateCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtTemplateCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtTemplateCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
