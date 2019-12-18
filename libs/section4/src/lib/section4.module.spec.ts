import { async, TestBed } from '@angular/core/testing';
import { Section4Module } from './section4.module';

describe('Section4Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Section4Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Section4Module).toBeDefined();
  });
});
