app.controller('MainController', function($scope){
    $scope.films=[]
    $scope.films = function(){
        $scope.films.push($scope.addfilm)
        $scope.newFilm = {}
    }    
})

  mc.addFilm = function($index){
        mc.newFilm.push(film);
    }
    
    mc.removeFilm = function($index){
        mc.splice.push(film)
    }