import { getGreeting } from '../support/app.po';

describe('sfb', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to sfb!');
  });
});
