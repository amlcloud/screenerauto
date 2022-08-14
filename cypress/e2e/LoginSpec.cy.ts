// <reference types="cypress" />

import { LoginPage } from "../pages/loginPage";

describe('seeder login Logout functionality tests', () => {

  const loginPage = new LoginPage();

  it('Login anonymous', () => {
    cy.visit('/');
    loginPage.clickLoginanonymous();

  })

});