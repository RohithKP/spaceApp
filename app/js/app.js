angular.module('myApp', ['angular.filter','ngRoute']);

    // configure our routes
    angular.module('myApp').config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/todo', {
                templateUrl : '../partials/todo.html',
                controller  : 'TodoCtrl'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
    });

