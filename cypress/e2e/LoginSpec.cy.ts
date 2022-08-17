// <reference types="cypress" />

import { LoginPage } from "../pages/loginPage";

describe('screener login Logout functionality tests', () => {

  const loginPage = new LoginPage();

  it('Login anonymous', () => {
    cy.visit('/');
    loginPage.clickLoginanonymous();

  })

});