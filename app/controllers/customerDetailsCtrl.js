app.controller('customerDetailsCtrl', ['$routeParams', '$scope', '$http', 'jsonService', function($routeParams, $scope, $http, jsonService) {
    var custId = $routeParams.custId;
    var customers = [];
    $scope.customer = [];

    var fetch = jsonService.fetchAllJson("customers");
    fetch.success(function(data) {
        customers = data;
        angular.forEach(customers, function(value, key) {

            if (value.id === custId) {
                $scope.customer = value;
            }
        });

    });

}]);
