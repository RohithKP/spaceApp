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
