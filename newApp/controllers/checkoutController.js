app.controller("checkoutController", function($scope, $location, CartService, checkoutService){
    $scope.cartItems=CartService.getCart();
    $scope.customer={
        name: "",
        phoneNumber: "",
        email:"",
        address:""
    };
    $scope.subtotal=0;
    $scope.calculateSubtotal = function(){
        $scope.subtotal=0;
        $scope.cartItems.forEach(function(item){
            $scope.subtotal += item.price * item.quantity;
        });
    };
    $scope.calculateSubtotal();

    $scope.Order=function(userId){
        return{
            customer_id: userId,
            total_price: $scope.subtotal,
            address: $scope.customer.address,
            status: "pending"
        }
    }
    $scope.orderItems=function(orderId){
        return $scope.cartItems.map(function(item){
            return{
                order_id: orderId,
                medicine_id: item.id,
                quantity: item.quantity,
                price: item.price
            }
        });
    }

    $scope.completeOrder=function(userId){
        let orderData=$scope.Order(userId);
        checkoutService.createOrder(orderData).then(function(orderRes){
            let orderId=orderRes.data[0].id;
            let itemsData=$scope.orderItems(orderId);
            checkoutService.createOrderItems(itemsData).then(function(){
                CartService.saveCart([]);
                console.log("Order completed successfully");
                // Redirect user after order is submitted
                $location.path('/shop');
            });
        });
    };

    $scope.submitOrder=function(){
        checkoutService.findUser($scope.customer.email).then(function(response){
            if(response.data.length > 0){
                var userId=response.data[0].id;
                console.log("Existing user id:", userId);
                $scope.completeOrder(userId);
            } else {
                checkoutService.createUser($scope.customer).then(function(userRes){
                    var userId = userRes.data[0].id;
                    console.log("New user id:", userId);
                    $scope.completeOrder(userId);
                });
            }
        });
    };
});