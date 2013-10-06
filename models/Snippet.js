(function () {
    "use strict";

    var Mongoose = require('mongoose');

    exports.SnippetSchema = new Mongoose.Schema({
        title : { type : String, required : true },
        code : { type : String, required : true }
    });
}());

