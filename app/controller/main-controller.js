app.controller('MainController', function ($scope) {
    var mc = this
    $scope.films = []

$scope.addFilm = function () {
    $scope.films.push($scope.newFilm);
}

$scope.removeFilm = function (i) {
    $scope.films.splice(i,1)
    }
})