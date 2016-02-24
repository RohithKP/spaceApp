angular.module('myApp').service('jsonService', ['$http', function($http) {
    var APIJson = {};
    APIJson.fetchAllJson = function(file) {
        return $http.get('/assets/json/' + file + '.json');
    }
    return APIJson;
}]);
