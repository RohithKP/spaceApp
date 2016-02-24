
 angular.module('myApp').controller('dashboardCtrl', ['$scope', function ($scope) {

        $scope.message="hry";
    }]);

 angular.module('myApp').controller('TodoCtrl', ['$scope', 'todoService', function ($scope, todoService) {

        $scope.todos =  todoService.todos();
         $scope.pageClass = 'page-todo';
//          $scope.todos = [];


//    todoService.todos(function(d) { scope.todos = d }, function () {})


        $scope.getTodos = function () {
            return todoService.todos();
        };
        $scope.addTodo = function (text,date) {
            if(text != '') {
                todoService.addTodo(text,date);
            }
        };

        $scope.deleteTodo = function (id) {
          console.log(id);
            todoService.deleteTodo(id);
        };

        $scope.resetForm = function() {
            $scope.text = '';
        };
    }]);


