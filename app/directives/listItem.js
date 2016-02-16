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
                  scope.remainingCount = $filter('filter')(scope.todos, { done: false }).length;
                  scope.completedCount = scope.todos.length - scope.remainingCount;
                  scope.allChecked = !scope.remainingCount;
                                      console.log(scope.value);
//          scope.remaining = $filter('filter')(scope.value, { done: false }).length;
                  }, true);
                      }
                      };
    })
    .directive('myNote', function ($filter) {
        return {
            restrict:'E',
            scope:{
                delete:'&',
                todo:'=todo',

            },
            link:function (scope, element, attrs) {

              /*                  $el =element;
                $el.hide().fadeIn('slow'); */
/*
                $('.thumbnails').sortable({
                    placeholder:"ui-state-highlight", forcePlaceholderSize:true
                }); */
            }
        };
    })
