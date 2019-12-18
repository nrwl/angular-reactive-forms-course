import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson2CompletedBootstrapExampleComponent } from './lesson2-completed-bootstrap-example.component';

describe('Lesson2CompletedBootstrapExampleComponent', () => {
  let component: Lesson2CompletedBootstrapExampleComponent;
  let fixture: ComponentFixture<Lesson2CompletedBootstrapExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson2CompletedBootstrapExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson2CompletedBootstrapExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
