app.factory('jsonService', ['$http', function($http) {
	var APIJson = {};
	APIJson.fetchAllJson =function(file){
        return $http.get('../app/assets/json/'+file+'.json');
    }
    return APIJson;
}]);
