/*global exports, require */

(function () {
    "use strict";
    var indexRoutes = require('../routes/index.js');

    exports.testCreateSnippet = function (test) {

        var req = {
            body : {
                title: 'Variable',
                code: 'var number = 1;'
            }
        };

        var Snippet = function(obj) {
            this.data = obj;
            this.save = function(callback) {
                test.equals(obj, req.body);
                callback(null, this);
            };
        };

        var fn = indexRoutes.create(Snippet);

        var res = {
            json : function(obj) {

                test.equals(req.body, obj.snippet.data);

                test.expect(2);
                test.done();
            }
        };

        fn(req, res);
    };
}());

