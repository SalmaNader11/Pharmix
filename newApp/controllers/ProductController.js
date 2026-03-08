app.controller('ProductController',function($scope,$routeParams,$location,ProductService,CartService){
    $scope.productId=$routeParams.id;
    $scope.product=null;
    $scope.quantity=1;

    ProductService.getProductById($scope.productId).then(function(response){
        $scope.product = response.data[0];
    },function(error){
        console.log(error);
    });

    $scope.addToCart = function(){
        CartService.addToCart($scope.product,$scope.quantity);
        $scope.quantity = 1;
    };
});
    