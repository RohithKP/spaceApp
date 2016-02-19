app.controller('customerDetailsCtrl', ['$routeParams','$scope', function($routeParams,$scope){
    $scope.custId = $routeParams.custId;
    console.log($scope.custId);
}]);