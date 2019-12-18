import { async, TestBed } from '@angular/core/testing';
import { Section6Module } from './section6.module';

describe('Section6Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Section6Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Section6Module).toBeDefined();
  });
});
