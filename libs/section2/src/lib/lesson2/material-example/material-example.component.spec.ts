import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialExampleComponent } from './material-example.component';

describe('MaterialExampleComponent', () => {
  let component: MaterialExampleComponent;
  let fixture: ComponentFixture<MaterialExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
