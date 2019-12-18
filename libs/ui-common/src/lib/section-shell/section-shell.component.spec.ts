import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionShellComponent } from './section-shell.component';

describe('SectionShellComponent', () => {
  let component: SectionShellComponent;
  let fixture: ComponentFixture<SectionShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
