import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveTemplatesComponent } from './archive-templates.component';

describe('ArchiveTemplatesComponent', () => {
  let component: ArchiveTemplatesComponent;
  let fixture: ComponentFixture<ArchiveTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
