import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson2CompletedMaterialExampleComponent } from './lesson2-completed-material-example.component';

describe('Lesson2CompletedMaterialExampleComponent', () => {
  let component: Lesson2CompletedMaterialExampleComponent;
  let fixture: ComponentFixture<Lesson2CompletedMaterialExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lesson2CompletedMaterialExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lesson2CompletedMaterialExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
