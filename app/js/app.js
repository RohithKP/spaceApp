var app = angular.module('spaceApp', ['ngRoute','ngResource']);

    app.config(['$routeProvider',function($routeProvider) {

        $routeProvider
            .when('/dashboard', {
                templateUrl:'/app/partials/dashboard.html',
                controller: '' ,
                css:''    
                
            })
            .when('/customers', {
                templateUrl:'/app/partials/customer.html',
                controller: 'customerCtrl',    
                css:'/app/assets/stylesheets/customers.css'
            })
            .when('/todo', {
                templateUrl:'/app/partials/todo.html',
                controller: '',              
            })
            .when('/customer/:custId',{
                templateUrl:'/app/partials/customerDetails.html',
                controller:'customerDetailsCtrl'
            })
            .otherwise({
                redirectTo: '/index.html'
            });
                       
    }]);

