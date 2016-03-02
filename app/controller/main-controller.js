app.controller('MainController', function($scope){
    $scope.books=[]
    $scope.makeBook = function(){
        $scope.books.push($scope.newBook)
        $scope.newBook = {}
    }    
    
})