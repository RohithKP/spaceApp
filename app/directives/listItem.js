angular.module('myApp').directive('myNotebook', function () {
        return {
                  restrict:"E",
                  scope:{
                      notes:'=notes',
                      ondelete:'&'
                  },
                  templateUrl:"partials/notebook-directive.html",
                  controller:function ($scope, $attrs) {
                      $scope.delete = function (id) {
                          $scope.ondelete({id:id});
//                         console.log(id);
                           }
                 }
        };
    })
    .directive('myNote', function () {
        return {
            restrict:'E',
            scope:{
                delete:'&',
                note:'=note'
            },
            link:function (scope, element, attrs) {
              console.log(element);
              /*                  $el =element;
                $el.hide().fadeIn('slow'); */
/*
                $('.thumbnails').sortable({
                    placeholder:"ui-state-highlight", forcePlaceholderSize:true
                }); */
            }
        };
    })
