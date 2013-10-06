'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Todo list', function() {
    beforeEach(function() {
        browser().navigateTo('/');
        sleep(1);
    });

    it("should be able to add a snippet", function () {
        expect(repeater('.snippets').count()).toBe(0);

        input('newSnippet.title').enter('Snippet Test');
        input('newSnippet.code').enter('var test = "test";');
        element('.btn-primary').click();
        sleep(1);

        expect(repeater('.snippets').count()).toBe(1);
    });

});