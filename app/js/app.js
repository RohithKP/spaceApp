// var app = angular.module('spaceApp', ['ngRoute', 'ngResource']);

// app.config(['$routeProvider', function($routeProvider) {

//     $routeProvider
//         .when('/dashboard', {
//             templateUrl: '/partials/dashboard.html',
//             controller: '',
//             css: ''

//         })
//         .when('/customers', {
//             templateUrl: '/partials/customer.html',
//             controller: 'customerCtrl',
//             css: '/app/assets/stylesheets/customers.css'
//         })
//         .when('/todo', {
//             templateUrl: '/partials/todo.html',
//             controller: '',
//         })
//         .when('/customer/:custId', {
//             templateUrl: '/partials/customerDetails.html',
//             controller: 'customerDetailsCtrl'
//         })
//         .otherwise({
//             redirectTo: '/index.html'
//         });

// }]);

angular.module('myApp', ['angular.filter','ngRoute','ngAnimate']);

    // configure our routes
    angular.module('myApp').config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/todo', {
                templateUrl : '../partials/todo.html',
                controller  : 'TodoCtrl'
            })
            .when('/customer/:custId', {
                templateUrl: '/partials/customerDetails.html',
                controller: 'customerDetailsCtrl'
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
            })
            .otherwise({
            redirectTo: '/index.html'
            });
    });
