app.controller('customerDetailsCtrl', ['$routeParams', '$scope', 'jsonService', function($routeParams, $scope, jsonService) {
    var custId = $routeParams.custId;
    var customers = [];
    $scope.customer = [];

    var fetch = jsonService.fetchAllJson("customers");
    fetch.success(function(data) {
        customers = data;
        angular.forEach(customers, function(object) {
        	

            if (object.id === custId) {
                $scope.customer = object;
            }
        });

    });

}]);
