app.controller("cartController", function($scope, CartService){
    $scope.cartItems=CartService.getCart();
    $scope.subtotal=0;
    $scope.shipping = 0;

    $scope.calculateSubtotal = function(){
        $scope.subtotal=0;
        $scope.cartItems.forEach(function(item){
            $scope.subtotal += item.price * item.quantity;
        });
        if($scope.subtotal>500){
            $scope.shipping = 0;
        }
        else{
            $scope.shipping = 70;
        }
    };
    $scope.calculateSubtotal();

  
    $scope.updateCart=function(){
        CartService.saveCart($scope.cartItems);
        $scope.calculateSubtotal();

        };
   
    $scope.increaseQty = function(item){
        item.quantity++;
        $scope.updateCart();
    };

    $scope.decreaseQty = function(item){
        if(item.quantity > 1){
            item.quantity--;
            $scope.updateCart();
        } else {
            $scope.removeItem(item);
        }

    };

    
    $scope.removeItem = function(item){
        let index = $scope.cartItems.indexOf(item);
        if (index === -1) return;

        CartService.removeItem(index);
        $scope.cartItems = CartService.getCart();
        $scope.calculateSubtotal();
    };
});
