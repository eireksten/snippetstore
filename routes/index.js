/*global exports */

/*
 * GET home page.
 */
(function () {
    "use strict";

    exports.index = function(Snippet) {
        return function (req, res) {
            Snippet.find({}, function(error, snippets) {
                res.render('index', {
                    title: 'The Snippet Store',
                    snippets : snippets
                });
            });
        };
    };

    exports.create = function (Snippet) {
        return function (req, res) {
            var snippet = new Snippet(req.body);
            snippet.save(function(error, snippet) {
                if (error || !snippet) {
                    res.json({ error : error });
                } else {
                    res.json({ snippet : snippet });
                }
            });
        };
    };

    exports.update = function(Snippet) {
        return function(req, res) {
            Snippet.findOne({ _id : req.params.id }, function(error, snippet) {
                if (error || !snippet) {
                    res.json({ error : error });
                } else {
                    snippet.done = req.body.done;
                    snippet.save(function(error, snippet) {
                        if (error || !snippet) {
                            res.json({ error : error });
                        } else {
                            res.json({ todo : snippet });
                        }
                    });
                }
            });
        };
    };

}());
