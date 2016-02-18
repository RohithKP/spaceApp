app.controller('customerCtrl', ['$scope','$http', 'jsonService',function($scope,$http,jsonService) {
    $scope.customers = [];
    var fetch = jsonService.fetchAllJson("customers");
    fetch.success(function(data) {
        $scope.customers = data;
    });
    // $scope.saved = localStorage.getItem('customers');
    // $scope.customers = $scope.customers.push($scope.saved);
    // $scope.customers = ($scope.saved !== null) ? JSON.parse($scope.saved) : [];
    
    $scope.addCustomer = function() {
            $scope.customers.unshift({
            custName: $scope.custName,
            address: $scope.address,
            country: $scope.country,
            accMngr: $scope.accMngr,
            accMngrEmail: $scope.accMngrEmail
        });
            localStorage.setItem('customers', JSON.stringify($scope.customers));

    };

}]);
