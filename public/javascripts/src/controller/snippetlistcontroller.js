(function (global) {
    "use strict";

    global.SnippetListController = function ($scope) {

        $scope.snippets = [];

        $scope.starFilter = {star: true};
        $scope.noStarFilter = {star: false};

        $scope.setSnippets = function(snippets) {
            $scope.snippets = snippets;
        };

    };
}(this));
