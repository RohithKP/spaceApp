var app = angular.module('spaceApp', ['ngResource']);

app.controller('addCustomer', ['$scope', '$http', function($scope,$http) {
    $scope.customers = [];
    $http.get('../assets/json/customers.json').success(function(data){
    newjson = data.customers.replace(/'/g, '"');
    s='['+ newjson.substring(1, newjson.length - 1) +']';
  	console.log(eval(s)[0].custName);
  });
    $scope.addCustomer = function() {
            $scope.customers.push({
            custName: $scope.custName,
            address: $scope.address,
            country: $scope.country,
            accMngr: $scope.accMngr,
            accMngrEmail: $scope.accMngrEmail
        });

    };

}]);
