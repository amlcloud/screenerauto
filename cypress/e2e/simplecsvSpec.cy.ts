// <reference types="cypress" />
import csv = require('csvtojson');

describe('compare aml data with source file', () => {

  it('treasury.gov ', () => {
    cy.request({
      method: 'POST',
      url: 'https://us-central1-screener-9631e.cloudfunctions.net/getList',//AML  data API
      qs: {
        'id': 'un'
      },
      headers: {
        "Content-Type": "application/json",
        "X-MyHeader": "123",
        "Connection": "keep-alive"
      },
      body: {
        "id": "treasury.gov"
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body[0].lastName).to.eq('CANO CORREA');//Just comparing with one data
    }).then((response) => {
      let name = response.body[0].lastName;

      console.log(response.body.length)
      cy.request({
        method: 'GET',
        url: 'https://www.treasury.gov/ofac/downloads/sdn.csv',//source API
        headers: {
          "Content-Type": "application/json",
          "Connection": "keep-alive"
        },
      }).then((response) => {
        expect(response.status).to.eq(200);//verify the status code
      }).then((response) => {
        csv({ noheader: true })
          .fromString(response.body)
          .then((jsonArray) => {
            console.log(jsonArray.length);

            for (let index = 0; index < jsonArray.length; index++) {
              let abc: string = jsonArray[index].field2;

              if (abc.includes(name)) {
                console.log(jsonArray[index].field2 + 'present in getList API Response');//field2 in csv is mapped to the firstname and lastname
                break;
              } else if (index == jsonArray.length - 1) {
                console.log('value not present')
              }
            }
          })
      });


    });
  })

})