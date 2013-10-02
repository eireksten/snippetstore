/*global exports, require */

(function () {
    "use strict";
    var indexRoutes = require('../routes/index.js');

    exports.testAddSnippet = function (test) {
        var snippets = [
            {
                title: 'Named function declaration',
                code: 'function myFunction() {}',
                star : true
            }
        ];

        var fn = indexRoutes.addSnippet(snippets);

        var req = {
            body : {
                title: 'Variable',
                code: 'var number = 1;',
                star : false
            }
        };

        var res = {
            json : function(obj) {

                test.equals(snippets, obj.snippets);
                test.equals(2, snippets.length);

                test.equals(req.body.title, snippets[1].title);
                test.equals(req.body.code, snippets[1].code);
                test.ok(!snippets[1].star);

                // test.expect means 'expect 5 tests will be run'
                test.expect(5);
                test.done();
            }
        };

        fn(req, res);
    };
}());

