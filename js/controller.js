var mainApp = angular.module('mainApp',[]);

mainApp.controller('controller', ['$scope', '$sce', '$http', function($scope, $sce, $http, filterFilter) {
    
//getting json files
    $http.get('js/eboard.json').success(function(data1) {
        $scope.eboard = data1.eboard;
    });
    $http.get('js/players.json').success(function(data2) {
        $scope.players = data2;
    });

    $scope.useGames = {};
    $scope.$sce = $sce;
    
// Watch the games that are selected 
    $scope.$watch(function filterTime() {
        return {
            players: $scope.players,
            useGames: $scope.useGames,
        }
    }, function (value) {
        var selected;
        
        $scope.count = function (prop, value) {
            return function (el) {
                return el[prop] == value;
            };
        };
        
        // Current games represented in players.json
        $scope.gamesGroup = ['lol','ow'];
        
        var filterAfterGames = [];        
        selected = false;
        for (var j in $scope.players) {
            var p = $scope.players[j];
            for (var i in $scope.useGames) {
                if ($scope.useGames[i]) {
                    selected = true;
                    //search for substring 'i' in p.games
                    if (p.games.indexOf(i) > -1) {
                        filterAfterGames.push(p);
                        break;
                    }
                }
            }        
        }
        if (!selected) {
            filterAfterGames = $scope.players;
        }   

        $scope.filteredPlayers = filterAfterGames;        
    }, true);
}]);