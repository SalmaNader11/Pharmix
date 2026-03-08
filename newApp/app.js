var app=angular.module('myApp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider

    .when('/shop',{
        templateUrl:'views/shop.html',
        controller:'shopController'
    })
    .when('/aboutus',{
        templateUrl:'views/aboutus.html',
    })
    .when('/product/:id',{
        templateUrl:'views/product.html',
        controller:'ProductController'
    })
    .when('/cart',{
        templateUrl:'views/cart.html',
        controller:'cartController'
    })
    .when('/checkout',{
        templateUrl:'views/checkout.html',
        controller:'checkoutController'
    })
    .otherwise({
        redirectTo:'/shop'
    });

    });
