app.controller("navbarController", function($scope, CartService){
    $scope.cartCount = 0;

    let cart = CartService.getCart();
    let total = 0;

    cart.forEach(function(item){
        total += item.quantity;
    });

    $scope.cartCount = total;
});