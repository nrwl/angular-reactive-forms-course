import { getGreeting } from '../support/app.po';

describe('forms-course', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to forms-course!');
  });
});
