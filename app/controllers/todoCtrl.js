 angular.module('myApp').controller('TodoCtrl', ['$scope','jsonService','$filter', function ($scope,jsonService,$filter) {

         var fetch = jsonService.fetchAllJson("todos");

         fetch.success(function(data) {
         $scope.todos    = data;
         });

         $scope.pageClass = 'page-todo';


//    todoService.todos(function(d) { scope.todos = d }, function () {})


        $scope.getTodos = function () {

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
