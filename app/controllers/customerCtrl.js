angular.module('myApp').controller('customerCtrl', ['$scope', '$http', 'jsonService', function($scope, $http, jsonService) {

    $scope.pageClass = 'page-customer';
    $scope.display = 'false';
    $scope.toggleShow = function() {
        $scope.display = !$scope.display;

    }

    $scope.customers = [];
    var fetch = jsonService.fetchAllJson("customers");
    fetch.success(function(data) {
        $scope.customers = data;
    });



    $scope.addCustomer = function() {
        $scope.customers.unshift({
            custName: $scope.custName,
            address: $scope.address,
            country: $scope.country,
            accMngr: $scope.accMngr,
            accMngrEmail: $scope.accMngrEmail
        });


    };

}]);
