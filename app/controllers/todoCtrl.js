 angular.module('myApp').controller('TodoCtrl', ['$scope', 'todoService', function ($scope, todoService) {
        $scope.getNotes = function () {
            return todoService.notes();
        };
        $scope.addNote = function (noteTitle) {
            if(noteTitle != '') {
                todoService.addNote(noteTitle);
            }
        };

        $scope.deleteNote = function (id) {
          console.log(id);
            todoService.deleteNote(id);
        };

        $scope.resetForm = function() {
            $scope.noteTitle = '';
        };
    }]);

