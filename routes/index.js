/*global exports */

/*
 * GET home page.
 */
(function () {
    "use strict";

    exports.index = function(snippets) {
        return function (req, res) {
            res.render('index', {
                title: 'The Snippet Store',
                snippets: snippets
            });
        };
    };

    exports.addSnippet = function (snippets) {
        return function (req, res) {
            snippets.push(req.body);
            res.json({snippets: snippets});
        };
    };

}());
