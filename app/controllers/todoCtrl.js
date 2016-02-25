 angular.module('myApp').controller('TodoCtrl', ['$scope','jsonService','$filter', function ($scope,jsonService,$filter) {
<<<<<<< HEAD

         var fetch = jsonService.fetchAllJson("todos");

         fetch.success(function(data) {
         $scope.todos    = data;
         });

         $scope.pageClass = 'page-todo';
=======

         var fetch = jsonService.fetchAllJson("todos");
>>>>>>> 9beed585806ca499efba1a7d4e3c93cb6e387979

         fetch.success(function(data) {
         $scope.todos    = data;
         });

         $scope.pageClass = 'page-todo';
//    todoService.todos(function(d) { scope.todos = d }, function () {})


        $scope.getTodos = function () {
<<<<<<< HEAD

=======
>>>>>>> 9beed585806ca499efba1a7d4e3c93cb6e387979
            return $scope.todos;
        };

        $scope.addTodo = function (text,date) {
          if(text != '') {
            $scope.todos.unshift({
                id:Date.now(), title:text,date:$filter('date')(date, "dd/MM/yyyy"),done:false
            });
          }
        };
        $scope.deleteTodo = function (id) {
            var oldTodos = $scope.todos;
            data = [];
            angular.forEach(oldTodos, function (item) {
                if (item.id !== id) data.push(item);
            });
            $scope.todos= data;
        };
        $scope.resetForm = function() {
            $scope.text = '';
        };
    }]);
