import { async, TestBed } from '@angular/core/testing';
import { Section2Module } from './section2.module';

describe('Section2Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Section2Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Section2Module).toBeDefined();
  });
});
