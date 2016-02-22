angular.module('myApp', ['angular.filter','ngRoute','ngAnimate']);

    // configure our routes
    angular.module('myApp').config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/todo', {
                templateUrl : '../partials/todo.html',
                controller  : 'TodoCtrl'
            })

            // route for the about page
            .when('/customers', {
                templateUrl : '../partials/customers.html',
                controller  : ''
            })

            // route for the contact page
            .when('/dashboard', {
                templateUrl : '../partials/dashboard.html',
                controller  : ''
            });
    });


