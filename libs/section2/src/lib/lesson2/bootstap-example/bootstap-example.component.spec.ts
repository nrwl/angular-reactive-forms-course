import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstapExampleComponent } from './bootstap-example.component';

describe('BootstapExampleComponent', () => {
  let component: BootstapExampleComponent;
  let fixture: ComponentFixture<BootstapExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstapExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstapExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
