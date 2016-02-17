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
    }).directive('contenteditable', function() {
     return {
      controller:function ($scope, $attrs) {
          $scope.bool = 'false'
                      $scope.edit = function (id) {
                       $scope.bool = true;
//                       $(angular.element( document.querySelector( '.todo-text' ) )[0]).addClass('editing');
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
});
