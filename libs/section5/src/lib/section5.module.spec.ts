import { async, TestBed } from '@angular/core/testing';
import { Section5Module } from './section5.module';

describe('Section5Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Section5Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Section5Module).toBeDefined();
  });
});
