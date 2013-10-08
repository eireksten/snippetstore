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