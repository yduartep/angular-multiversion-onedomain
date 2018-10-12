'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function () {
    
    it('should automatically redirect to /dogs when location hash/fragment is empty', function () {
        browser.get('index.html');
        expect(browser.getCurrentUrl()).toMatch("/dogs");
    });

    describe('dogs', function () {

        beforeEach(function () {
            browser.get('/dogs');
        });

        it('should render dogs when user navigates to /dogs', function () {
            expect(element.all(by.css('[ui-view] h1')).first().getText()).toMatch(/Dogs/);
        });

    });

    describe('help', function () {

        beforeEach(function () {
            browser.get('/help');
        });

        it('should render help page when user navigates to /help', function () {
            expect(element.all(by.css('[ui-view] h1')).first().getText()).toMatch(/Help/);
        });

    });
});
