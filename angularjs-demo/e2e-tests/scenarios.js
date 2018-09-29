'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /dogs when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getCurrentUrl()).toMatch("/dogs");
  });


  describe('dogs', function() {

    beforeEach(function() {
      browser.get('index.html#!/dogs');
    });


    it('should render dogs when user navigates to /dogs', function() {
      expect(element.all(by.css('[ng-view] h1')).first().getText()).
        toMatch(/Dogs/);
    });

  });


  describe('cats', function() {

    beforeEach(function() {
      browser.get('index.html#!/cats');
    });


    it('should render cats when user navigates to /cats', function() {
      expect(element.all(by.css('[ng-view] h1')).first().getText()).
        toMatch(/Cats/);
    });

  });
});
