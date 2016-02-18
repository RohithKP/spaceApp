angular.module('myApp').directive('myNotebook', function ($filter) {
        return {
                  restrict:"E",
                  scope:{
                      todos:'=todos',
                      ondelete:'&',
                           value:'='
                  },
                  templateUrl:"partials/notebook-directive.html",
                  controller:function ($scope, $attrs) {
                      $scope.delete = function (id) {
                          $scope.ondelete({id:id});
                           }
                 },
                link:function (scope, element, attrs) {
             		  scope.$watch('todos', function () {
                  console.log(scope.todos);
                  scope.remainingCount = $filter('filter')(scope.todos, { done: false }).length;
                  scope.completedCount = scope.todos.length - scope.remainingCount;
                  scope.allChecked = !scope.remainingCount;
                  }, true);
                      }
                      };
    })
    .directive('myNote', function ($filter) {
        return {
            controller:function ($scope, $attrs) {
                           $scope.bool = 'false';

                           $scope.edit = function () {
                           $scope.bool = !scope.bool;
                             console.log('as');
                               }
            },
            restrict:'E',
            scope:{
                delete:'&',
                todo:'=todo'
            },
            link:function (scope, element, attrs) {

            }
        };
    }).directive('editable', function() {
     return {
            controller:function ($scope, $attrs) {
                           $scope.bool = 'false';
                           $scope.edit = function () {
//                                $scope.bool = !$scope.bool;
                               console.log('as');
                               }
            },
           link: function(scope, elm, attrs, ctrl) {
           }
  };
});
/* .directive('editable', function() {
     return {
       controller:function ($scope, $attrs) {
                           $scope.bool = 'false';
                           $scope.edit = function (id) {
                           $scope.bool = true;
                               }
          },
          require: 'ngModel',
          link: function(scope, elm, attrs, ctrl) {

          // view -> model
          elm.on('blur', function() {
            elm.removeClass('editing');
            ctrl.$setViewValue(elm.html());
            scope.bool =false;
          });
          elm.on('focus', function() {
            console.log("foused");
            elm.addClass('editing');
          });
          // model -> view
          ctrl.$render = function() {
            elm.html(ctrl.$viewValue);
          };

          // load init value from DOM
          ctrl.$setViewValue(elm.html());
    }
  };
}); */
