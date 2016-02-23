var app = angular.module('spaceApp', ['ngRoute', 'ngResource']);

app.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/dashboard', {
            templateUrl: '/partials/dashboard.html',
            controller: '',
            css: ''

        })
        .when('/customers', {
            templateUrl: '/partials/customer.html',
            controller: 'customerCtrl',
            css: '/app/assets/stylesheets/customers.css'
        })
        .when('/todo', {
            templateUrl: '/partials/todo.html',
            controller: '',
        })
        .when('/customer/:custId', {
            templateUrl: '/partials/customerDetails.html',
            controller: 'customerDetailsCtrl'
        })
        .otherwise({
            redirectTo: '/index.html'
        });

}]);



app.controller('customerCtrl', ['$scope', '$http', 'jsonService', function($scope, $http, jsonService) {
        $scope.display = 'false';
    $scope.toggleShow = function(){
        $scope.display = !$scope.display;

    }

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
           // localStorage.setItem('customers', JSON.stringify($scope.customers));

    };

}]);

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




app.service('jsonService', ['$http', function($http) {
    var APIJson = {};
    APIJson.fetchAllJson = function(file) {
        return $http.get('../assets/json/' + file + '.json');
    }
    return APIJson;
}]);

