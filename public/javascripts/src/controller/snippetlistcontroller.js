/*global angular */

(function (global) {
    "use strict";

    angular.module('SnippetModule', ['ui.bootstrap']);

    global.SnippetListController = function ($scope, $http) {

        $scope.snippets = [];

        $scope.newSnippet = {
            title: "",
            code: ""
        };

        $scope.setSnippets = function(snippets) {
            $scope.snippets = snippets;
        };

        $scope.add = function() {
            $http.post('/snippet.json', $scope.newSnippet).success(function (data) {
                if (data.snippet) {
                    $scope.snippets.push(data.snippet);
                    $scope.newSnippet.title = '';
                    $scope.newSnippet.code = '';
                } else {
                    alert(JSON.stringify(data));
                }
            });
        };

    };

}(this));
