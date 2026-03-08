app.controller("shopController",function($scope,ProductService,CartService){

    
    $scope.categories = ["All"];
    $scope.selectedCategory = "All";
    $scope.sortOption = "name";
    $scope.productSearch = "";
    $scope.products = [];

    ProductService.getProducts().then(function(response){
        $scope.products = response.data;
        console.log($scope.products);

        for(var i = 0; i < $scope.products.length; i++){
            if($scope.categories.indexOf($scope.products[i].category) === -1){
                $scope.categories.push($scope.products[i].category);
            }
        }
    },function(error){
        console.log(error);
    });

    $scope.filterByCategory = function(product){
        if($scope.selectedCategory === "All"){
            return true;
        }
        return product.category === $scope.selectedCategory;
        
    };

     $scope.addToCart = function(product){
        CartService.addToCart(product, 1);
     };

});