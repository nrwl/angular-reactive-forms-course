import { async, TestBed } from '@angular/core/testing';
import { Section3Module } from './section3.module';

describe('Section3Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Section3Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Section3Module).toBeDefined();
  });
});
