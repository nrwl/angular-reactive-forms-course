import { async, TestBed } from '@angular/core/testing';
import { Section1Module } from './section1.module';

describe('Section1Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Section1Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Section1Module).toBeDefined();
  });
});
